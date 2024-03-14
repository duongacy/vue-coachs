import { type VariantProps, cva } from 'class-variance-authority'
export { default as BaseAlert } from './BaseAlert.vue'
export { default as AlertTitle } from './AlertTitle.vue'
export { default as AlertDescription } from './AlertDescription.vue'

export const alertVariants = cva('relative rounded-lg border p-4 flex gap-1', {
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      destructive: 'border-destructive/50 text-destructive dark:border-destructive'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export type AlertVariants = VariantProps<typeof alertVariants>
