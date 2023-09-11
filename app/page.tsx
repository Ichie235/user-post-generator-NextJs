import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <div className="nav-links-container">
        <Link href="/users" className="nav-links">
          Link to users-page
        </Link>
      </div>
    </main>
  );
}
