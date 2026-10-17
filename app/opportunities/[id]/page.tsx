

import {opportunities} from "../../lib/opportunities"
import { notFound } from "next/navigation";
import Link from "next/link"
const fieldsToDisplay = [
  "company",
  "location",
  "description",
] as const;

type parameter={
    params:Promise<{id:string}>
}
export default async function opportunitiesPage({params}:parameter){
const {id} = await params;
const opportunity = opportunities.find(
    (item) => item.id === id
  );

  if (!opportunity) {
  return (
      <main>
        <h1>Opportunity not found</h1>
        <p>The opportunity you are  looking for does not exist.</p>
        <Link href="/opportunities">Back to opportunities</Link>
      </main>
    );
  }
return (
    <main>
      <h1>{opportunity.title}</h1>

      {fieldsToDisplay.map((field) => (
        <p key={field}>
          <strong>{field}:</strong> {String(opportunity[field])}
        </p>
      ))}

      <Link href="/opportunities">
        Back to opportunities
      </Link>
    </main>
  );
}