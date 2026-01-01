import { Github, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GJ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold">Gautam Jha</span>
                <span className="text-gray-400 text-sm">Platform Engineer</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Building production-grade infrastructure and self-healing systems.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:gautam.jha3101@zohomail.in"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>gautam.jha3101@zohomail.in</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Delhi, India</span>
              </div>
              <a
                href="https://github.com/gautamjha31012002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                <span>gautamjha31012002</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Availability</h4>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm">Open to opportunities</span>
            </div>
            <p className="text-gray-400 text-sm">
              Senior DevOps / Platform Engineer roles
              <br />
              India & Remote
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Gautam Jha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
