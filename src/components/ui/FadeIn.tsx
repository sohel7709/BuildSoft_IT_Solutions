import React, { useEffect, useRef, useState } from 'react';

export type FadeInDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export default function FadeIn({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  ...rest
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: FadeInDirection;
} & React.HTMLAttributes<HTMLDivElement>) {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const getDirectionClass = () => {
    if (isVisible) return 'opacity-100 translate-y-0 translate-x-0';
    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-8';
      case 'down':
        return 'opacity-0 -translate-y-8';
      case 'left':
        return 'opacity-0 -translate-x-8';
      case 'right':
        return 'opacity-0 translate-x-8';
      case 'none':
        return 'opacity-0';
      default:
        return 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={ref}
      {...rest}
      className={`transition-all duration-700 ease-out ${getDirectionClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...(rest.style ?? {}) }}
    >
      {children}
    </div>
  );
}

