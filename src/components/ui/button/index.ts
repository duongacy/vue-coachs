import { cn } from '@/lib/utils';
import type { PrimitiveProps } from 'radix-vue';
import type { Variant } from '../types';
export { default as BaseButton } from './BaseButton.vue';

export type ButtonProps = PrimitiveProps & {
  variant?: Variant | 'ghost' | 'link';
  size?: 'md' | 'sm' | 'lg' | 'icon';
  class?: string;
};

export const buttonVariants = ({
  variant = 'primary',
  size = 'md',
  class: _class,
}: Pick<ButtonProps, 'variant' | 'class' | 'size'>) => {
  return cn(
    'rounded-md flex items-center cursor-pointer justify-center disabled:cursor-not-allowed disabled:opacity-60',
    {
      'bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-80':
        variant === 'primary',
      'bg-destructive text-destructive-foreground hover:bg-destructive/90 disabled:opacity-80':
        variant === 'destructive',
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground':
        variant === 'outline',
      'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
      'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
      'text-primary underline-offset-4 hover:underline': variant === 'link',

      'h-10 px-4 py-2': size === 'md',
      'h-9 px-3': size === 'sm',
      'h-11 px-8': size === 'lg',
      'h-10 w-10 justify-center': size === 'icon',
    },
    _class,
  );
};
