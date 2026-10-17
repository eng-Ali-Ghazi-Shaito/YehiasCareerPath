import Link from "next/link";

export default function PlanPage() {
  return (
    <main>
      <h1>Here is your plan Yehia</h1>

      <p className="page-intro">
        Follow these three steps to prepare for your job search
        over the next two months.
      </p>

      <div className="cards">
        <section className="card">
          <h2>1. Prepare</h2>

          <ul className="checklist">
            <li>
              <label>
                <input type="checkbox" />
                <span>
                  <strong>CV:</strong> Your CV must be ATS-machine friendly.
                </span>
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" />
                <span>
                  <strong>Portfolio:</strong> Your portfolio must include
                  at least one production-ready software project that
                  solves a real business problem.
                </span>
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" />
                <span>
                  <strong>Target role:</strong> Set a specific,
                  time-based goal: land a job at an enterprise company
                  in Lebanon within two months.
                </span>
              </label>
            </li>
          </ul>
        </section>

        <section className="card">
          <h2>2. Practice</h2>

          <ul className="checklist">
            <li>
              <label>
                <input type="checkbox" />
                <span>
                  <strong>Skills:</strong> In 2026, develop your
                  communication skills, become fluent in spoken
                  English or French, and learn AI skills such as
                  Claude integration.
                </span>
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" />
                <span>
                  <strong>HR interviews:</strong> Prepare for interviews
                  by recording yourself answering questions about your
                  confidence and personality, such as "Where do you see
                  yourself in two years?" and "Why should we hire you?"
                </span>
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" />
                <span>
                  <strong>Technical interviews:</strong> Understand
                  technical fundamentals deeply and be able to explain
                  your projects, including their trade-offs.
                </span>
              </label>
            </li>
          </ul>
        </section>

        <section className="card">
          <h2>3. Apply</h2>

          <ul className="checklist">
            <li>
              <label>
                <input type="checkbox" />
                <span>
                  <strong>Apply:</strong> Aim to apply to more than
                  100 local and remote companies, including before
                  they publicly post job openings.
                </span>
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" />
                <span>
                  <strong>Explore:</strong> Stay updated by being
                  active on LinkedIn and watching webinars.
                </span>
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" />
                <span>
                  <strong>Follow up:</strong> Track your applications
                  and follow up with companies when appropriate.
                </span>
              </label>
            </li>
          </ul>
        </section>
      </div>

      <Link href="/">HomePage</Link>
    </main>
  );
}