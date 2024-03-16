import { cn } from '@/lib/utils';
import type { PrimitiveProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';
export { default as BaseButton } from './BaseButton.vue';

export type ButtonProps = PrimitiveProps & {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  class?: HTMLAttributes['class'];
  disabled?: boolean;
};

export const buttonVariants = ({
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) => {
  return cn(
    'rounded-md flex items-center cusor-pointer',
    {
      'pointer-events-none opacity-60': props.disabled,

      'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'default',
      'opacity-80': props.disabled && variant === 'default',
      'bg-destructive text-destructive-foreground hover:bg-destructive/90':
        variant === 'destructive',
      'opacity-80 ': props.disabled && variant === 'destructive',
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground':
        variant === 'outline',
      'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
      'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
      'text-primary underline-offset-4 hover:underline': variant === 'link',

      'h-10 px-4 py-2': size === 'default',
      'h-9 px-3': size === 'sm',
      'h-11 px-8': size === 'lg',
      'h-10 w-10 justify-center': size === 'icon',
    },
    props.class,
  );
};
