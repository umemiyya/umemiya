export function Wrapper({children}: {children: React.ReactNode}) {
  return <div className="py-2 grid -space-y-2">
    {children}
  </div>
}