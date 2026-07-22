import { BlogPosts } from 'app/components/posts'
import { ProjectPosts } from 'app/components/projects'
import { Vortex } from 'app/components/vortex'

export default function Page() {
  return (
    <section>
      <Vortex />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Patrick Emechebe
      </h1>
      <div className="mb-4">
        <p className="mb-4">
          Hi, I'm Patrick, a Data Analyst who turns complex data into clear, actionable insights.
        </p>
        <p className="mb-4">
          I specialize in data analysis, business intelligence, and product analytics, using Python, SQL, Excel, Power BI, and Tableau to uncover trends, track performance, and support better business decisions.
        </p>
        <p className="mb-4 font-mono text-sm">
          📊 Skill Set: Data Analysis || Statistical Tools (Python) || Data Visualization || SQL || Excel || Problem Solving || Collaboration
        </p>
        <p className="mb-4">
          Let's connect and explore data analysis can bring a fresh perspective to your team's analytical endeavors.
        </p>
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Projects</h2>
        <ProjectPosts />
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">My Blog</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
