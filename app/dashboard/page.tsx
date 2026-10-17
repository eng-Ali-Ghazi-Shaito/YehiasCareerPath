import {applications} from "../lib/applications"
import Link from "next/link"


export default function DashboardPage() { 

    return (
    <main>
    <h2>Number of applications submitted  is {applications.length}</h2>  
    <h3>you can achieve your goal stay consistent</h3>

    <Link href="/dashboard/applications" className="button">ApplicationsPage</Link>

    </main>
  );
}
