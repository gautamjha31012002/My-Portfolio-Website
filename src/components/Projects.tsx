import { GitBranch, Server, Cloud, Activity, Cpu } from 'lucide-react';

interface Project {
  title: string;
  icon: React.ReactNode;
  description: string[];
  status: 'In Progress' | 'Learning Project';
  tags: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'GitOps-Based CI/CD Platform',
      icon: <GitBranch className="w-8 h-8" />,
      description: [
        'Secure Jenkins & GitLab pipelines',
        'GitOps deployments using Argo CD',
        'Multi-environment release strategy'
      ],
      status: 'In Progress',
      tags: ['Jenkins', 'GitLab CI', 'Argo CD', 'GitOps']
    },
    {
      title: 'Bare-Metal Kubernetes Platform (K3s)',
      icon: <Server className="w-8 h-8" />,
      description: [
        'Production-grade K3s clusters',
        'Helm-based deployments',
        'Networking, storage, reliability focus'
      ],
      status: 'In Progress',
      tags: ['Kubernetes', 'K3s', 'Helm', 'Bare-Metal']
    },
    {
      title: 'Multi-Cloud Infrastructure with Terraform',
      icon: <Cloud className="w-8 h-8" />,
      description: [
        'AWS & Civo Terraform modules',
        'Environment isolation (dev/stage/prod)',
        'CI/CD-driven infra provisioning'
      ],
      status: 'In Progress',
      tags: ['Terraform', 'AWS', 'Civo', 'IaC']
    },
    {
      title: 'Kubernetes Observability Stack',
      icon: <Activity className="w-8 h-8" />,
      description: [
        'Prometheus, Grafana, Zabbix, ELK',
        'Dashboards, alerting, tracing',
        'Full-stack monitoring solution'
      ],
      status: 'In Progress',
      tags: ['Prometheus', 'Grafana', 'ELK', 'Observability']
    },
    {
      title: 'AI-Driven Self-Healing Kubernetes',
      icon: <Cpu className="w-8 h-8" />,
      description: [
        'Anomaly detection for workloads',
        'Automated remediation & predictive alerts',
        'AIOps-focused platform engineering'
      ],
      status: 'Learning Project',
      tags: ['AIOps', 'Kubernetes', 'AI/ML', 'Automation']
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400">
            Building production-grade platforms and infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-gray-700 rounded-lg text-blue-400 group-hover:bg-gray-600 transition-colors">
                  {project.icon}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'In Progress'
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.title}
              </h3>

              <ul className="space-y-3 mb-6">
                {project.description.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
