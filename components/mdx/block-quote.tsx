export function mdxBlockQuote({
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
    <blockquote
      className={`border-l-4 border-muted-foreground bg-secondary/20 rounded-r-sm pl-4 py-2 my-2 ${className}`}
      {...props}
    >
      {children}
    </blockquote>
  )
}