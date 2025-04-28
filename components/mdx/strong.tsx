export function mdxStrong({
  children,
  className = "",
  ...props
} : 
  React.HTMLAttributes<HTMLElement> &
  {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <strong
      className={`font-semibold text-foreground/70 ${className}`}
      {...props}
    >
      {children}
    </strong>
  )
}