import { profile } from "@/lib/data";

export async function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-8 px-6 pb-28 bg-muted/30">
      <div className="container mx-auto max-w-6xl flex justify-center text-sm text-muted-foreground">
        <p>
          © {year} {profile.firstName} {profile.lastName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
