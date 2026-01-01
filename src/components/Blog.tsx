import { BookOpen, Clock } from 'lucide-react';

export default function Blog() {
  const upcomingTopics = [
    'Kubernetes',
    'GitOps',
    'Platform Engineering',
    'DevOps with AI'
  ];

  return (
    <section id="blog" className="py-32 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h2>
          <p className="text-xl text-gray-400">
            Technical insights and platform engineering deep-dives
          </p>
        </div>

        <div className="max-w-4xl">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-12 text-center opacity-75">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gray-800 rounded-full">
                <BookOpen className="w-12 h-12 text-gray-500" />
              </div>
            </div>

            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full mb-6 border border-blue-500/20">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>

            <h3 className="text-2xl font-semibold text-gray-300 mb-4">
              Technical Content in Progress
            </h3>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm working on detailed technical articles covering platform engineering,
              infrastructure automation, and production systems. Stay tuned for in-depth
              content on:
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {upcomingTopics.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg text-sm border border-gray-700"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
