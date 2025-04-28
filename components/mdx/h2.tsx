export function mdxH2({
  children,
  className = "",
  ...props
} : 
  React.HTMLAttributes<HTMLHeadingElement> &
  {
  children: string,
  className?: string
}) {

  return (
    <h2
      className={`text-2xl/10 py-2 text-foreground/80 font-bold ${className}`}
      {...props}
    >
      {children}
    </h2>
)}