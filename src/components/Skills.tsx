import { Server, GitMerge, Code, Boxes, Eye, Shield, Cpu } from 'lucide-react';

interface Skill {
  title: string;
  icon: React.ReactNode;
  capabilities: string[];
}

export default function Skills() {
  const skills: Skill[] = [
    {
      title: 'Platform & Infrastructure Engineering',
      icon: <Server className="w-6 h-6" />,
      capabilities: [
        'Designing and operating production-grade Kubernetes platforms',
        'Bare-metal and cloud Kubernetes architecture',
        'Cluster networking, storage, scheduling, and autoscaling',
        'Stateful workloads and persistent storage',
        'High availability and fault-tolerant systems'
      ]
    },
    {
      title: 'CI/CD & GitOps Engineering',
      icon: <GitMerge className="w-6 h-6" />,
      capabilities: [
        'End-to-end CI/CD pipeline design (Jenkins, GitLab CI, GitHub Actions)',
        'Pipeline-as-Code and multi-project pipelines',
        'Secure CI/CD with DevSecOps practices',
        'GitOps-driven continuous delivery using Argo CD & FluxCD',
        'Progressive delivery: canary & blue/green deployments'
      ]
    },
    {
      title: 'Infrastructure as Code & Automation',
      icon: <Code className="w-6 h-6" />,
      capabilities: [
        'Terraform for multi-cloud infrastructure provisioning',
        'Modular IaC design with workspaces and remote state',
        'Terraform Cloud for collaboration and governance',
        'Configuration management with Ansible',
        'Automated infrastructure provisioning via CI/CD'
      ]
    },
    {
      title: 'Cloud-Native & Microservices Architecture',
      icon: <Boxes className="w-6 h-6" />,
      capabilities: [
        'Cloud-native application design (12-Factor App)',
        'Kubernetes-based microservices architectures',
        'Serverless architectures (AWS Lambda, Azure Functions)',
        'Hybrid Kubernetes + serverless platforms'
      ]
    },
    {
      title: 'Observability & Reliability Engineering',
      icon: <Eye className="w-6 h-6" />,
      capabilities: [
        'Metrics-driven monitoring with Prometheus & Grafana',
        'Centralized logging using ELK stack',
        'Distributed tracing with Jaeger',
        'Alerting strategies and incident visibility',
        'Scaling monitoring infrastructure for large systems'
      ]
    },
    {
      title: 'Security & DevSecOps',
      icon: <Shield className="w-6 h-6" />,
      capabilities: [
        'Shift-left security in CI/CD pipelines',
        'Zero-Trust architecture principles',
        'Secure service-to-service communication (mTLS)',
        'Secrets management and secure configuration',
        'Compliance-aware infrastructure design'
      ]
    },
    {
      title: 'DevOps with AI (AIOps)',
      icon: <Cpu className="w-6 h-6" />,
      capabilities: [
        'AI-driven automation in CI/CD pipelines',
        'Predictive analytics for performance & capacity planning',
        'AI-based anomaly detection and alerting',
        'AI-assisted incident management & root-cause analysis',
        'Designing self-healing systems with automated remediation',
        'AI-enhanced monitoring and observability'
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Capabilities
          </h2>
          <p className="text-xl text-gray-400">
            Production-proven expertise across the platform engineering stack
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="bg-gray-900 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gray-800 rounded-lg text-blue-400 flex-shrink-0">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white leading-tight pt-2">
                  {skill.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {skill.capabilities.map((capability) => (
                  <li key={capability} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
