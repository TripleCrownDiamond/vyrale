// app/dashboard/page.tsx
import { UserButton, auth } from "@clerk/nextjs";
import Link from 'next/link';

export default function DashboardPage() {
  const { userId } = auth();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
      <header className="absolute top-0 right-0 p-8">
        <UserButton afterSignOutUrl="/" />
      </header>
      <h1 className="text-4xl font-heading font-bold text-primary mb-8">
        Tableau de Bord
      </h1>
      <p className="text-lg mb-4">
        Bienvenue sur votre tableau de bord, {userId ? `utilisateur ${userId}` : "invité"}!
      </p>
      <p className="mb-8">
        Ceci est une page de base pour votre tableau de bord. Vous pouvez la personnaliser.
      </p>
      <Link href="/" className="text-primary hover:underline">
        Retour à l'accueil
      </Link>
    </div>
  );
}