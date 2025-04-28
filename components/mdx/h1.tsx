export function mdxH1({
  children,
  className = "",
  ...props
} : 
  React.HTMLAttributes<HTMLHeadingElement> &
  {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <h1
      className={`text-3xl/10 py-3 text-foreground/90 font-bold ${className}`}
      {...props}
    >
      {children}
    </h1>
)}