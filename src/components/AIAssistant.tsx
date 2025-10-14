import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const AIAssistant = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);

  const messages = {
    idle: "Looking for bugs? I already caught them all 😉. Keep scrolling!",
    projects: "Check out Pankaj's healthcare solutions—they're life-savers (literally!) 🏥",
    contact: "Deploying the contact form... don't be shy! 🚀",
    skills: "Impressive tech stack, right? These tools build magic ✨",
    default: "Deploying love & logic 💻💘"
  };

  useEffect(() => {
    // Show welcome message after 2 seconds
    const welcomeTimer = setTimeout(() => {
      setIsVisible(true);
      setMessage(messages.default);
    }, 2000);

    // Idle detection
    let idleTimer: NodeJS.Timeout;
    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        setMessage(messages.idle);
        setIsVisible(true);
        setIsMinimized(false);
      }, 5000);
    };

    // Scroll detection for contextual messages
    const handleScroll = () => {
      resetIdleTimer();
      
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');
      const skillsSection = document.getElementById('skills');

      if (projectsSection) {
        const projectsTop = projectsSection.offsetTop;
        if (scrollPos + windowHeight/2 > projectsTop && scrollPos < projectsTop + projectsSection.offsetHeight) {
          setMessage(messages.projects);
          setIsVisible(true);
          setIsMinimized(false);
        }
      }

      if (contactSection) {
        const contactTop = contactSection.offsetTop;
        if (scrollPos + windowHeight/2 > contactTop) {
          setMessage(messages.contact);
          setIsVisible(true);
          setIsMinimized(false);
        }
      }

      if (skillsSection) {
        const skillsTop = skillsSection.offsetTop;
        if (scrollPos + windowHeight/2 > skillsTop && scrollPos < skillsTop + skillsSection.offsetHeight) {
          setMessage(messages.skills);
          setIsVisible(true);
          setIsMinimized(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('keypress', resetIdleTimer);

    resetIdleTimer();

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(idleTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', resetIdleTimer);
      window.removeEventListener('keypress', resetIdleTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      {!isMinimized ? (
        <div className="relative bg-gradient-to-br from-primary/90 to-secondary/90 backdrop-blur-lg text-white rounded-2xl shadow-[0_0_30px_rgba(0,212,255,0.5)] p-4 max-w-sm animate-scale-in">
          <button
            onClick={() => setIsMinimized(true)}
            className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Minimize assistant"
          >
            <X className="h-4 w-4" />
          </button>
          
          <div className="flex items-start gap-3 pr-6">
            <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-2xl">🤖</span>
            </div>
            <p className="text-sm leading-relaxed pt-1">{message}</p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="group relative w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full shadow-[0_0_30px_rgba(0,212,255,0.5)] flex items-center justify-center animate-pulse hover:scale-110 transition-transform"
          aria-label="Open assistant"
        >
          <MessageCircle className="h-8 w-8 text-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
