// components/ui/navigation-menu.tsx
import { cn } from "@/lib/utils"
import * as React from "react"

interface NavigationMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NavigationMenu({ className, ...props }: NavigationMenuProps) {
  return <nav className={cn("flex gap-4", className)} {...props} />
}

interface NavigationMenuListProps extends React.HTMLAttributes<HTMLUListElement> {}

export function NavigationMenuList({ className, ...props }: NavigationMenuListProps) {
  return <ul className={cn("flex list-none gap-4", className)} {...props} />
}

interface NavigationMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}

export function NavigationMenuItem({ className, ...props }: NavigationMenuItemProps) {
  return <li className={cn("inline-block", className)} {...props} />
}
