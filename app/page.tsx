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
          Hello, I'm Patrick, an aspiring data analyst specializing in translating complex data into actionable insights.
        </p>
        <p className="mb-4">
          Now deeply immersed in the world of data analysis, I wield statistical tools and data visualization techniques to derive meaningful conclusions. Proficient in Python programming, SQL, and Excel, I'm adept at transforming data into strategic narratives that guide decision-making.
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
