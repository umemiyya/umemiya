export function mdxOl({
  children,
  className = "",
  ...props
} : 
  React.HTMLAttributes<HTMLOListElement> &
  {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <ol
      className={`list-decimal list-outside pl-5 ${className}`}
      {...props}
    >
      {children}
    </ol>
  )
}