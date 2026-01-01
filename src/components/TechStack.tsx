import { Cloud, Box, GitBranch, FileCode, Activity, Terminal } from 'lucide-react';

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  technologies: string[];
}

export default function TechStack() {
  const categories: TechCategory[] = [
    {
      title: 'Cloud & Infrastructure',
      icon: <Cloud className="w-6 h-6" />,
      technologies: ['Bare-Metal (OVH)', 'AWS', 'Azure', 'Civo Cloud']
    },
    {
      title: 'Containers & Orchestration',
      icon: <Box className="w-6 h-6" />,
      technologies: ['Docker', 'Kubernetes (K3s)', 'Helm', 'Istio (Service Mesh)']
    },
    {
      title: 'CI/CD & GitOps',
      icon: <GitBranch className="w-6 h-6" />,
      technologies: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'Argo CD', 'FluxCD', 'Tekton']
    },
    {
      title: 'Infrastructure as Code',
      icon: <FileCode className="w-6 h-6" />,
      technologies: [
        'Terraform (Modules, Workspaces, Remote State, Terraform Cloud)',
        'Ansible'
      ]
    },
    {
      title: 'Monitoring & Observability',
      icon: <Activity className="w-6 h-6" />,
      technologies: [
        'Prometheus',
        'Grafana',
        'Alertmanager',
        'ELK Stack',
        'Jaeger',
        'Nagios XI',
        'Zabbix'
      ]
    },
    {
      title: 'Scripting & OS',
      icon: <Terminal className="w-6 h-6" />,
      technologies: ['Linux (Production Operations)', 'Bash (Intermediate)', 'Golang (Beginner)']
    }
  ];

  return (
    <section id="tech-stack" className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tech Stack</h2>
          <p className="text-xl text-gray-400">
            Production-tested tools and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gray-700 rounded-lg text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.technologies.map((tech) => (
                  <div key={tech} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm leading-relaxed">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
