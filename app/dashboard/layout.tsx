import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav
        className="dashboard-nav"
        aria-label="Dashboard navigation"
      >
        <ul className="dashboard-nav-list">
          <li>
            <Link href="/dashboard">Overview</Link>
          </li>

          <li>
            <Link href="/dashboard/applications">
              Applications
            </Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
}