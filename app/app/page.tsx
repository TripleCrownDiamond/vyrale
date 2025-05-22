export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-[hsl(var(--gray-medium))] bg-background/80 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-card lg:p-4">
          Get started by editing&nbsp;
          <code className="font-mono font-bold text-primary">app/page.tsx</code>
        </p>
      </div>
      <div className="mt-12">
        <h1 className="text-4xl font-bold font-heading text-primary">Welcome to ⚡vyrale</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          This is a sample page styled with our new dark theme.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Primary Button
          </button>
          <button className="px-6 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90">
            Accent Button
          </button>
        </div>
      </div>
    </main>
  );
}
