import { SiGithub } from '@icons-pack/react-simple-icons'

export function CopyRight() {
  return (
    <div className="">
      <p className="text-muted-foreground/70 border-b inline-flex items-center gap-2 text-center">
        <SiGithub size={17} />
        <a href="https://github.com/umemiyya/umemiya" className="font-[family-name:var(--font-geist-mono)]">
          umemiya.fyi
        </a>
      </p>
    </div>
  )
}