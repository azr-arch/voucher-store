import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <button
        className={`
          ${
            variant === "outline"
              ? "bg-transparent border border-white text-white hover:bg-white hover:text-black"
              : "bg-white text-black hover:bg-gray-200"
          }
          ${size === "sm" ? "px-2 py-1 text-sm" : size === "lg" ? "px-4 py-3 text-lg" : "px-3 py-2"}
          rounded-none font-medium focus:outline-none transition-colors duration-300
          ${className ? className : ""}
        `}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

