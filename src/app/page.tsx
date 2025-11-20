import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-red-500 to-orange-600" />
            <span className="text-xl font-bold tracking-tight">Massa</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/mcp" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              MCP Server
            </Link>
            <Link href="/scan" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Scan QR
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-orange-600/10 blur-3xl" />

        <h1 className="mx-auto max-w-4xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
          The Decentralized Web, <br />
          <span className="text-white">Reimagined.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          Experience the first blockchain with Autonomous Smart Contracts and true decentralization.
          Build unstoppable applications with high throughput and low latency.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/mcp"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-red-600 px-8 font-medium text-white transition-all hover:bg-red-700 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)]"
          >
            <span className="mr-2">Try MCP Server</span>
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link
            href="/scan"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-800 bg-black px-8 font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
          >
            Scan QR Code
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative bg-zinc-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-500">Why Massa?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for the next generation of dApps
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Massa solves the blockchain trilemma without compromising on decentralization or security.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                    <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Autonomous Smart Contracts
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                  <p className="flex-auto">
                    Smart contracts that can wake themselves up. Automate DeFi, gaming, and more without relying on centralized bots or keepers.
                  </p>
                </dd>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                    <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  High Throughput
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                  <p className="flex-auto">
                    Experience up to 10,000 transactions per second. Our parallel block architecture ensures your apps scale effortlessly.
                  </p>
                </dd>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                    <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  True Decentralization
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                  <p className="flex-auto">
                    Host your entire dApp on-chain. From frontend to backend, build applications that are truly unstoppable and censorship-resistant.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Code Snippet Section */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Developer Friendly by Design
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Forget learning obscure languages. Write your smart contracts in
                <span className="text-white font-semibold"> TypeScript</span>.
                Leverage the tools you already know and love.
              </p>
              <div className="mt-10">
                <Link
                  href="/mcp"
                  className="text-sm font-semibold leading-6 text-red-500 hover:text-red-400"
                >
                  Try the MCP Server <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl bg-zinc-900/50 p-6 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="absolute top-0 left-0 right-0 flex h-12 items-center gap-2 border-b border-white/5 px-4">
                <div className="h-3 w-3 rounded-full bg-red-500/20" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                <div className="h-3 w-3 rounded-full bg-green-500/20" />
              </div>
              <div className="mt-8 overflow-x-auto">
                <pre className="text-sm leading-relaxed text-zinc-300">
                  <code>{`import { Args, stringToBytes } from "@massalabs/as-types";
import { Storage } from "@massalabs/massa-as-sdk";

export function main(args: string): void {
  const key = stringToBytes("hello");
  const value = stringToBytes("world");
  
  // Store data on-chain
  Storage.set(key, value);
  
  // Autonomous execution logic...
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-zinc-500 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Massa Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
