type buttonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
};

export default function Button({ label, variant = 'primary' }: buttonProps) {
  const base = 'px-4 py-2 rounded-lg font-semibold transition';
  const styles = {
    primary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105',
    secondary: 'bg-secondary text-white hover:bg-secondary/70 hover:scale-105',
  };
  return <button className={`${base} ${styles[variant]}`}>{label}</button>;
}