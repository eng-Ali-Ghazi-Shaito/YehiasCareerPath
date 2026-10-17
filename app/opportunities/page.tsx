import Link from "next/link"
import {opportunities} from "../lib/opportunities"

export default function OpportunitiesPage() {
  return (
    <main>
      <h1>Opportunities</h1>
      <ul className="cards">
        {opportunities.map((opportunity) => (
          <li key={opportunity.id} className="card">
            <h3>{opportunity.title}</h3>
            <p className="muted">{opportunity.company} · {opportunity.location}</p>
            <Link href={`/opportunities/${opportunity.id}`}>View opportunity</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
