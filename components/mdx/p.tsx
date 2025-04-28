export function mdxP({
  children,
  className = "",
  ...props
} : 
  React.HTMLAttributes<HTMLParagraphElement> &
  {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <p
      className={`text-muted-foreground text-base/7 py-2 ${className}`}
      {...props}
    >
      {children}
    </p>
)}