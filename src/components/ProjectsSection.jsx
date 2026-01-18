import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Chanel Clone",
        description: "An Clone of the Chanel Homepage. Using React, TailwindCSS and DaisyUI, I Recreated the Hero layout, Navigation, Fashion and Fine Jewelry Sections.",
        image: "/projects/Chanel_Clone.png",
        tags: ["React", "TailwindCSS", "OpenAI"],
        demoUrl: "https://chanel-clone.vercel.app",
        githubUrl: "https://github.com/OlvarAba/Chanel_Clone",
    },
     {
        id: 1,
        title: "PokeDex",
        description: "A responsive Pokédex built with React and React Router. Using API Intergration to fetch data and React hooks to manage dynamic content. It features component architecture for stats, evolution chains and shiny forms.",
        image: "/projects/Pokedex_Screenshot.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "https://poke-dex-olvar.vercel.app",
        githubUrl: "https://github.com/OlvarAba/PokeDex",
    },
     {
        id: 1,
        title: "Finance Dashboard",
        description: "A finance dashboard prototype built with Next.js and TailwindCSS. It Features interactive charts, transaction list and budget overview sections, to visualize financial data.",
        image: "/projects/FD_Screenshot.png",
        tags: ["Next.JS", "TailwindCSS"],
        demoUrl: "https://finance-dashboard-zeta-tan.vercel.app",
        githubUrl: "https://github.com/OlvarAba/FinanceDashboard",
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                Featured <span className="text-primary"> Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                My projects focus on real-world problem solving through modern React development. 
                Each build highlights clean, maintainable code, 
                strong design fundamentals, and practical,
                 user-focused functionality.
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