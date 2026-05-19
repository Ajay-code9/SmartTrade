import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/cn';

export type FeatureItem = {
  icon: LucideIcon;
  text: string;
  highlight?: boolean;
};

type FeatureIconListProps = {
  features: FeatureItem[];
};

export default function FeatureIconList({ features }: FeatureIconListProps) {
  return (
    <ul className="space-y-6">
      {features.map(({ icon: Icon, text, highlight }) => (
        <li
          key={text}
          className={cn('flex items-center gap-4 rounded-lg px-3 py-2', highlight && 'bg-gray-50')}
        >
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6 text-brand-blue" strokeWidth={1.75} />
          </div>
          <span className="text-gray-800 text-base md:text-lg font-medium">{text}</span>
        </li>
      ))}
    </ul>
  );
}
