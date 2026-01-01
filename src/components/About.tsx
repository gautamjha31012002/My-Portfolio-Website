export default function About() {
  return (
    <section id="about" className="py-32 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Platform Engineering at Scale
          </h2>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Senior DevOps Engineer with ~3 years of hands-on experience, specializing in{' '}
              <span className="text-white font-medium">bare-metal Kubernetes platforms</span>,{' '}
              <span className="text-white font-medium">CI/CD automation</span>,{' '}
              <span className="text-white font-medium">Infrastructure as Code</span>,{' '}
              <span className="text-white font-medium">GitOps</span>, and{' '}
              <span className="text-white font-medium">observability systems</span>.
            </p>

            <p>
              I operate close to the infrastructure layer — designing production Kubernetes
              clusters (K3s on bare metal), building Helm-based deployment systems, implementing
              secure CI/CD pipelines, and deploying monitoring and alerting stacks using
              Prometheus, Grafana, ELK, and Zabbix.
            </p>

            <div className="pt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Current Focus Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Platform Engineering',
                  'GitOps-driven delivery',
                  'DevOps with AI (AIOps)',
                  'Self-healing & reliability-focused systems'
                ].map((area) => (
                  <div key={area} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-base">
                <span className="text-white font-medium">Career Target:</span> Senior DevOps / Platform Engineer (India & Remote)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
