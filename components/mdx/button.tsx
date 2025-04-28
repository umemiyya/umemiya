export function Button({
  children,
  className= '',
  ...props
} : 
  React.ButtonHTMLAttributes<HTMLButtonElement> & 
  {
    children: React.ReactNode,
    className?: string
  }
) {
  return (
    <button className={`${className} text-muted-foreground`} {...props}>
      {children}
    </button>
  )
}