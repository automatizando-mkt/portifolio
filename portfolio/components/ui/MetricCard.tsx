interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="group/metric cursor-default text-center">
      <div className="text-4xl font-light tracking-tighter text-white transition-colors duration-300 group-hover/metric:text-canvas-accent">
        {value}
      </div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-neutral-600">
        {label}
      </div>
    </div>
  );
}
