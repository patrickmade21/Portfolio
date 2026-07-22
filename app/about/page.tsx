export const metadata = {
  title: 'About Me',
  description: 'About Patrick Emechebe, Data Analyst',
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row gap-8 mb-8 items-start">
        <div className="flex-1 space-y-4">
          <p>
            I'm a data analyst with hands-on experience turning raw data into clear, actionable insights that support better business and product decisions. 
          </p>
          <p>
            During my time as a Data Analyst Intern at Outcess, I worked with operational data, built dashboards, and analyzed performance trends to support reporting and decision-making. I also gained experience as a Product Analyst at Youbloom, where I analyzed user engagement and product performance to identify opportunities for improvement.
          </p>
          <p>
            I'm particularly interested in solving real-world problems at the intersection of data, products, and technology. Based in Lagos, Nigeria, I'm open to remote and hybrid opportunities where I can contribute, learn, and grow.
          </p>
        </div>
        
        <div className="w-full md:w-1/3 shrink-0 flex flex-col items-center">
          <div className="w-48 h-48 bg-neutral-100 dark:bg-neutral-900 rounded-full overflow-hidden flex items-center justify-center text-neutral-400 dark:text-neutral-500 mb-4 shadow-sm border border-neutral-200 dark:border-neutral-800">
            {/* Placeholder for Profile Picture */}
            <span className="text-sm">Profile Picture</span>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 tracking-tighter">Technical Skills & Competencies</h2>
        <div className="flex flex-wrap gap-2">
          {[
            'Python', 'SQL', 'Excel', 'Power BI', 'Tableau', 
            'Data Cleaning', 'Data Visualization', 'KPI Tracking', 'Business Intelligence'
          ].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full text-sm border border-neutral-200 dark:border-neutral-700">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <a 
          href="mailto:placeholder@example.com" 
          className="inline-block bg-black dark:bg-white text-white dark:text-black font-medium px-6 py-2 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
        >
          Let's Connect
        </a>
      </div>
    </section>
  )
}
