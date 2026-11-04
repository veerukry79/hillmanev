import type { ReactNode } from 'react';
import { useReveal } from '@/lib/useReveal';

type RevealProps = {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
};

export default function Reveal({ children, delay, className = '' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const delayClass = delay ? ` reveal-delay-${delay}` : '';
  return (
    <div ref={ref} className={`reveal${delayClass} ${visible ? 'is-visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}
