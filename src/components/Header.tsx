import { Github, Mail, MapPin } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GJ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm">Gautam Jha</span>
              <span className="text-gray-400 text-xs">Platform Engineer</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('tech-stack')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Blog
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/gautamjha31012002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:gautam.jha3101@zohomail.in"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
