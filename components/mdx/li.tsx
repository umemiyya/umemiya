export function mdxLi({
  children,
  className = "",
  ...props
} : 
  React.HTMLAttributes<HTMLLIElement> &
  {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <li
      className={`text-muted-foreground pl-2 text-base/7 p-1 ${className}`}
      {...props}
    >
      {children}
    </li>
  )
}