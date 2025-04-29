import Image from "next/image";

// Keep only the second 'Home' function definition (starting around line 109)
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* You can add header content here if needed */}
      </div>

      <div className="relative z-[-1] flex place-items-center ">
         {/* Replace with your actual logo/branding later */}
         <h1 className="text-4xl font-heading font-bold text-primary">
           ⚡vyrale
         </h1>
      </div>

      <div className="mt-16 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {/* Example content cards */}
        <a
          href="#" // Replace with actual links
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold font-heading">
            Dashboard{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Access your main workspace.
          </p>
        </a>

        {/* Add more content sections or components here */}
        {/* Example using Shadcn Button (uncomment import and run add command first) */}
        {/*
        <div className="mt-8">
          <Button variant="default">Primary Action</Button>
          <Button variant="secondary" className="ml-4">Secondary</Button>
          <Button variant="destructive" className="ml-4">Delete</Button>
        </div>
        */}

      </div>
    </main>
  );
}
