import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "AI Resume Analyzer",
        description: "An AI-intergrated resume analyzer using React, TailwindCSS and OpenAI",
        image: "/projects/ChatGPT.png",
        tags: ["React", "TailwindCSS", "OpenAI"],
        demoUrl: "#",
        githubUrl: "#",
    },
     {
        id: 1,
        title: "Spotify Clone",
        description: "A Spotify Clone using React, TailwindCSS",
        image: "/projects/spotify_placeholder.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
     {
        id: 1,
        title: "Expense Tracker",
        description: "An expense tracker dashboard using React, TailwindCSS",
        image: "/projects/Expense_Placeholder.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                Featured <span className="text-primary"> Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                My projects showcase real-world problem solving using modern React development.
                From AI-powered tools to polished UI builds, each project demonstrates clean
                code, strong design fundementals and practical functionality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div
                    key={key}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                    <div className="h-48 overflow-hidden">
                        <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="p-6">
                        <div>
                            <h3 className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                Project Coming soon</h3>
                        </div>
                    

                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} 
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                                    target="_blank">
                                    <ExternalLink size={20}/>
                                </a>
                                <a href={project.githubUrl} 
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                                    target="_blank">
                                    <Github size={20}/>
                                </a>
                            </div>
                            </div>                  
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/OlvarAba" 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank">
                    View My Github  <ArrowRight size={16} />
                    </a>
            </div>
        </div>
    </section>
}