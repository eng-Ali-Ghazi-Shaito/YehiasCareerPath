import { applications } from "../../lib/applications";

export default function ApplicationPage() {
  return (
    <main>
      <h1>Applications Dashboard</h1>

      <ul className="cards">
        {applications.map((application) => (
          <li key={application.id} className="card">
            <h3>{application.title}</h3>
            <p className="muted">{application.company}</p>
            <p><strong>Status:</strong> {application.status}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
