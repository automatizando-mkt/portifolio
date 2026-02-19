import { Workflow, MessageSquare, Plug, BarChart3, Mail, Compass } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { Service } from '@/content/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Workflow,
  MessageSquare,
  Plug,
  BarChart3,
  Mail,
  Compass,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];

  return (
    <Card>
      {Icon && <Icon className="mb-4 h-10 w-10 text-canvas-accent" />}
      <h3 className="text-xl font-medium text-white transition-colors duration-300 group-hover:text-canvas-accent">{service.title}</h3>
      <p className="mt-2 font-light leading-relaxed text-neutral-400">{service.description}</p>
      <ul className="mt-4 space-y-1">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="text-sm text-neutral-500">
            • {benefit}
          </li>
        ))}
      </ul>
    </Card>
  );
}
