import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  fluid?: boolean;
}

/**
 * Universal Global Layout Container
 * Enforces unified width (100%), max-width (1440px), center alignment (margin: 0 auto),
 * box-sizing (border-box), and consistent responsive horizontal paddings (px-4 sm:px-6 lg:px-[74px])
 * across all screen zoom ratios (100%, 90%, 80%, 75%, 67%).
 */
export function Container({
  as: Component = 'div',
  fluid = false,
  className,
  children,
  style,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'w-full mx-auto box-border transition-all',
        fluid ? 'max-w-full px-4 sm:px-6' : 'max-w-[1440px] px-4 sm:px-6 lg:px-[50px]',
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;
