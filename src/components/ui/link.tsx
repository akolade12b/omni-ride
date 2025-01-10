import { Link as RouterLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LinkProps extends React.ComponentPropsWithoutRef<typeof RouterLink> {
  children: React.ReactNode;
  href: string;
}

export function Link({ className, children, href, ...props }: LinkProps) {
  return (
    <RouterLink
      to={href}
      className={cn(
        'px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
        className
      )}
      {...props}
    >
      {children}
    </RouterLink>
  );
}