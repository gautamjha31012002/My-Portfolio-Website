import { MapPin, Mail, Github, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm font-medium tracking-wide">
                  Available for opportunities
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Gautam Jha
              </h1>

              <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-8">
                Senior DevOps Engineer | Platform & Kubernetes
              </h2>

              <p className="text-lg text-gray-400 max-w-3xl mb-12 leading-relaxed">
                Building production-grade infrastructure and platform engineering solutions.
                Specializing in bare-metal Kubernetes, GitOps automation, and self-healing systems.
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-16">
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>Delhi, India</span>
                </div>
                <a
                  href="mailto:gautam.jha3101@zohomail.in"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>gautam.jha3101@zohomail.in</span>
                </a>
                <a
                  href="https://github.com/gautamjha31012002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>gautamjha31012002</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href="mailto:gautam.jha3101@zohomail.in"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Get in touch
                </a>
                <a
                  href="https://github.com/gautamjha31012002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors border border-gray-700"
                >
                  View GitHub
                </a>
              </div>
            </div>

            <div className="flex-shrink-0">
              {/* Avatar - add your photo at /public/images/profile.png */}
              <div className="hidden md:block">
                {imgError ? (
                  <div className="flex items-center justify-center rounded-full w-40 h-40 md:w-56 md:h-56 bg-gray-800 text-white text-2xl font-bold border-4 border-gray-800 shadow-lg">
                    GJ
                  </div>
                ) : (
                  <img
                    src="/images/profile.png"
                    alt="Gautam Jha"
                    loading="lazy"
                    onError={() => setImgError(true)}
                    className="rounded-full w-40 h-40 md:w-56 md:h-56 object-cover border-4 border-gray-800 shadow-lg"
                  />
                )}
                <p className="text-gray-400 text-sm mt-3 text-center">Gautam Jha</p>
              </div>

              <div className="md:hidden flex items-center justify-center mt-6">
                {/* Small avatar on mobile if desired */}
                {imgError ? (
                  <div className="flex items-center justify-center rounded-full w-24 h-24 bg-gray-800 text-white text-xl font-bold border-4 border-gray-800 shadow-lg">
                    GJ
                  </div>
                ) : (
                  <img
                    src="/images/profile.png"
                    alt="Gautam Jha"
                    loading="lazy"
                    onError={() => setImgError(true)}
                    className="rounded-full w-24 h-24 object-cover border-4 border-gray-800 shadow-lg"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-12">
            <div className="flex items-center justify-center md:justify-start">
              <button
                onClick={scrollToNext}
                className="text-gray-500 hover:text-white transition-colors animate-bounce"
                aria-label="Scroll down"
              >
                <ArrowDown className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
