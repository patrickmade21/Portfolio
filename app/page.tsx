import { BlogPosts } from 'app/components/posts'
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/blog/nvidia-live-stock-data"
            className="group block border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 transition-all hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            <div className="flex flex-col space-y-3">
              <div className="w-full aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-md overflow-hidden relative flex items-center justify-center">
                {/* Placeholder for project image since generation failed. Using abstract gradient or solid color. */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center text-neutral-400 text-sm">
                  Stock Data Visualization
                </div>
              </div>
              <h3 className="font-medium text-lg group-hover:underline">
                NVIDIA LIVE STOCK DATA
              </h3>
            </div>
          </a>
        </div>
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
