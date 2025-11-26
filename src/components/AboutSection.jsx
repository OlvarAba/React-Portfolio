import { BrainCircuit, Code, User } from "lucide-react";



export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">React-focused front-end developer </h3>
                    <p className="text-muted-foreground">
                        I started coding as a hobby because I enjoy being creative and found a passion in building
                        responsive, clean and modern web applications. React quickly became my favorite tool because it lets me
                        turn big ideas into resuable components. 
                    </p>
                    <p className="text-muted-foreground">
                        My focus is on creating modern web applications using tools like React, JavaScript, Tailwind CSS and modern UI patterns. I'm always learning,
                        improving and exploring new ways to be a better front-end developer. 
                    </p>

                    <div className="text-2xl md:text-xl font-bold">
                        <h2>Coding <span className="text-primary">Tools</span></h2>
                    </div>

                    <div className="py-1 md:14 items-center justify-center">
                        <div className="mx-auto grid max-w-lg grid-cols-4 items-center place-items-center gap-4">
                            <div className="Relative Group">
                            <img
                            className="hover:scale-120 transition-transform"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
                            width={100}
                            height={100}
                            />
                            
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Github 
                                </div>
                            </div>
                            <img
                            className="hover:scale-120"
                            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                            width={100}
                            height={100}
                            />
                            <img
                            className="hover:scale-120"
                           
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042"
                            width={100}
                            height={100}
                            />
                            <img
                            className="hover:scale-120"
                            
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/820px-Vitejs-logo.svg.png?20220412224743"
                            width={100}
                            height={100}
                            />
                        </div>

                        <div className="flex justify-center mt-6">
                             <img
                            className="hover:scale-120"
                            title="Github"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png?20180806170715"
                            width={100}
                            height={100}
                            />
                        </div>
                        
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Contact Me  
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-2">
                    <div className="text-2xl md:text-xl font-bold">
                        <h2>My <span className="text-primary">Skills</span></h2>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-xl">Web Development</h4>
                                <p className="text-muted-foreground">Building responsive scalable interfaces with dynamic UI, 
                                    event handling, API intergration and reusable components
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />     
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-xl">UI/UX Fundementals</h4>
                                <p className="text-muted-foreground">Desinging intutive user interfaces and seamless user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <BrainCircuit className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-xl">AI Intergration</h4>
                                <p className="text-muted-foreground">Intergrating AI services into front-end applications to create intelligent
                                    user interactions and automate workflows.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    </section>

}

