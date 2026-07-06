import { redirect } from "next/navigation";
import { logoutAdmin } from "@/app/actions/admin-auth";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getAllContactSubmissions } from "@/lib/db";

export default async function AdminPage() {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    redirect("/admin/login");
  }

  const submissions = getAllContactSubmissions();

  return (
    <div className="container mx-auto max-w-5xl px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Contact Submissions</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {submissions.length} total
          </p>
        </div>
        <form action={logoutAdmin}>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg border hover:bg-accent transition-colors text-sm"
          >
            Logout
          </button>
        </form>
      </div>

      {submissions.length === 0 ? (
        <p className="text-muted-foreground">No submissions yet.</p>
      ) : (
        <div className="space-y-4">
          {submissions.map((s) => (
            <div key={s.id} className="border rounded-lg p-4 bg-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h2 className="font-semibold">{s.name}</h2>
                <span className="text-xs text-muted-foreground">
                  {new Date(
                    `${s.created_at.replace(" ", "T")}Z`,
                  ).toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                <a href={`mailto:${s.email}`} className="hover:underline">
                  {s.email}
                </a>
              </p>
              {s.subject && (
                <p className="text-sm font-medium mb-2">{s.subject}</p>
              )}
              <p className="text-sm whitespace-pre-wrap">{s.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
