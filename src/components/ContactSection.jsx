import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import { cn } from "@/lib/utils";
import { useToast } from "../assets/hooks/use-toast";
import { useState } from "react";




export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true);
        
        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            })

            setIsSubmitting(false);
        }, 1500)

        
    };
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get in <span className="text-primary"> Touch</span>
            </h2>

        <p className="texxt-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm actively seeking opportunities in front-end development. If you're looking for a 
            motivated developer to join your team, have a project in mind or just want to say hi,
            feel free to reach out to me! 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h2 className="text-2xl font-semibold mb-6">Contact <span className="text-primary">Info</span></h2>

                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary"/>
                        </div>
                        <div> 
                        <h4 className="font-medium"> Email</h4>
                         <a href="mailto:oabadeen@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            oabadeen@gmail.com
                        </a>
                        </div>
                    </div>
                </div>
                 <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary"/>
                        </div>
                        <div> 
                        <h4 className="font-medium"> Location</h4>
                         <a className="text-muted-foreground hover:text-primary transition-colors">
                            San Diego, CA
                        </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                        <h4 className="font-medium mb-4">My <span className="text-primary">Socials</span></h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/olvar/"
                                target="_blank"
                            >
                                <Linkedin className="hover:text-primary"/>
                            </a>
                             <a href="https://github.com/OlvarAba"
                             target="_blank"
                             >
                                <Github className="hover:text-primary"/>
                            </a>  
                        </div>
                     </div>
                 </div>

            <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit} >
                <h3 className="text-2xl font-semibold">Send a Message</h3>
                <form className="space-4-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 p-2">Your Name</label>
                        <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Lena Oxton..."
                        
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 p-2">Your Email</label>
                        <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Tracer@Overwatch.org"
                        
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 p-2">Your Message</label>
                        <textarea 
                               
                                id="message" 
                                name="message" 
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Tell me about your project or opportunity..."
                        />
                    </div>

                    <button 
                    type="submit"
                    disabled={isSubmitting}
                     className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                    
                    )}
                    >
                    {isSubmitting ? "Sending..." : "Send"}
                    <Send size={16}/>
                    </button>
                </form>
            </div>
        
        </div>
        </div>
    </section>
}