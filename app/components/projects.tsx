import Link from 'next/link'
import { getProjectPosts } from 'app/blog/utils'

export function ProjectPosts() {
    let allProjects = getProjectPosts()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allProjects
                .sort((a, b) => {
                    if (
                        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
                    ) {
                        return -1
                    }
                    return 1
                })
                .map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group block border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 transition-all hover:bg-neutral-100 dark:hover:bg-neutral-900"
                    >
                        <div className="flex flex-col space-y-3">
                            <div className="w-full aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-md overflow-hidden relative flex items-center justify-center">
                                {project.metadata.image ? (
                                    <img
                                        src={project.metadata.image}
                                        alt={project.metadata.title}
                                        className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center text-neutral-400 text-sm">
                                        {project.metadata.title}
                                    </div>
                                )}
                            </div>
                            <h3 className="font-medium text-lg group-hover:underline">
                                {project.metadata.title}
                            </h3>
                        </div>
                    </Link>
                ))}
        </div>
    )
}
