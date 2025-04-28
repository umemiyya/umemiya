export function mdxUl({
  children,
  className = "",
  ...props
} : 
  React.HTMLAttributes<HTMLUListElement> &
  {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <ul
      className={`list-disc list-outside pl-5 ${className}`}
      {...props}
    >
      {children}
    </ul>
  )
}