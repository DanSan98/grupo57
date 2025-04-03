// components/ui/button.tsx
import { cn } from "@/lib/utils"
import * as React from "react"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

// If you want to handle "asChild" logic, you'd need a library like @radix-ui/react-slot
// For now, let's keep it simple: we'll just ignore "asChild" unless you truly need it.

export function Button({ className, asChild, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700",
        className
      )}
      {...props}
    />
  )
}
 