"use server";

import { redirect } from "next/navigation";
import {
  createAdminSession,
  destroyAdminSession,
  verifyCredentials,
} from "@/lib/admin-auth";

export async function loginAdmin(formData: FormData) {
  const username = (formData.get("username") as string) ?? "";
  const password = (formData.get("password") as string) ?? "";

  if (!verifyCredentials(username, password)) {
    return { success: false, error: "Invalid username or password" };
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logoutAdmin() {
  await destroyAdminSession();
  redirect("/admin/login");
}
