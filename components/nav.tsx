import { RiArticleLine } from "@remixicon/react";
import Link from "next/link";

export function Nav() {
  return (
    <nav>
      <ul>
        <li className="grid items-center">
          <Link href="/" className="text-muted-foreground/70 inline-block">
            <RiArticleLine size={20} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}