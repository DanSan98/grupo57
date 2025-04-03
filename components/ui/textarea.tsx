// components/ui/textarea.tsx
import { cn } from "@/lib/utils"
import * as React from "react"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm " +
          "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 " +
          "focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        props.className
      )}
      {...props}
    />
  )
})

Textarea.displayName = "Textarea"
