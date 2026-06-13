interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ variant = 'dark', className = 'h-12' }: LogoProps) {
  const neuColor = variant === 'dark' ? '#023449' : '#FFFFFF';
  const cleanColor = '#60B566';

  return (
    <svg
      viewBox="0 0 200 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="NeuClean"
    >
      <text
        x="0"
        y="42"
        fontFamily="Outfit, sans-serif"
        fontSize="44"
        fontWeight="800"
        letterSpacing="-1px"
      >
        <tspan fill={neuColor}>Neu</tspan>
        <tspan fill={cleanColor}>Clean</tspan>
      </text>
    </svg>
  );
}
