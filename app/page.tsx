import Link from "next/link";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Seosoco</h1>
          <p className="py-6">
            Searchengine optimization socks configurator is a dummy website to
            learn and test SEO by configurating socks.
          </p>
          <Link href="/socks" className="btn btn-primary">
            Configure Socks
          </Link>
        </div>
      </div>
    </div>
  );
}
