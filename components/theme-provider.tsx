"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      defaultTheme="dark" // Set default theme to dark
      attribute="class"
      enableSystem={true} // Optional: respects system preference if default is not enforced
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
