import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "app.db");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

declare global {
  // eslint-disable-next-line no-var
  var __db: Database.Database | undefined;
}

const db = globalThis.__db ?? new Database(DB_PATH);
if (process.env.NODE_ENV !== "production") {
  globalThis.__db = db;
}

db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`);

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  created_at: string;
}

export function insertContactSubmission(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}): ContactSubmission {
  const stmt = db.prepare(
    `INSERT INTO contact_submissions (name, email, subject, message) VALUES (@name, @email, @subject, @message)`,
  );
  const info = stmt.run({
    name: data.name,
    email: data.email,
    subject: data.subject ?? null,
    message: data.message,
  });
  return db
    .prepare("SELECT * FROM contact_submissions WHERE id = ?")
    .get(info.lastInsertRowid) as ContactSubmission;
}

export function getAllContactSubmissions(): ContactSubmission[] {
  return db
    .prepare("SELECT * FROM contact_submissions ORDER BY created_at DESC")
    .all() as ContactSubmission[];
}

export default db;
