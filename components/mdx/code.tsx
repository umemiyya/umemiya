import { Highlight, themes } from "prism-react-renderer";

export async function mdxCode({
  children,
  className = "",
  ...props
} : 
  React.HTMLAttributes<HTMLElement> &
  {
  children: string,
  className?: string
}) {
  if(className.includes('language-')) {
    const language = className.replace("language-", "")

    return (
      <Highlight theme={themes.gruvboxMaterialDark} code={children} language={language}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} bg-secondary/30 my-4 overflow-auto scrollbar-hide rounded-sm font-[family-name:var(--font-geist-mono)] p-4 pb-0 text-sm`}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line })
              return (
                <div key={i} {...lineProps}>
                  {line.map((token, key) => {
                    const tokenProps = getTokenProps({ token })
                    return <span key={key} {...tokenProps} className="text-muted-foreground" />;
                  })}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    );    
  }
  return (
    <code
      className={`font-[family-name:var(--font-geist-mono)] bg-secondary rounded-sm px-2 py-[.15rem] ${className}`}
      {...props}
    >
      {children}
    </code>
  )
}