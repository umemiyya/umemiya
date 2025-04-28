import type { MDXComponents } from 'mdx/types'
import { mdxH1 } from './components/mdx/h1'
import { mdxA } from './components/mdx/a'
import { mdxH2 } from './components/mdx/h2'
import { mdxP } from './components/mdx/p'
import { mdxCode } from './components/mdx/code'
import { mdxOl } from './components/mdx/ol'
import { mdxLi } from './components/mdx/li'
import { mdxUl } from './components/mdx/ul'
import { mdxBlockQuote } from './components/mdx/block-quote'
import { mdxStrong } from './components/mdx/strong'
import { mdxImage as Image } from './components/mdx/img'
import { Wrapper } from './components/wrap-post'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: mdxH1,
    h2: mdxH2,
    a: mdxA,
    p: mdxP,
    ol: mdxOl,
    ul: mdxUl,
    li: mdxLi,
    code: mdxCode,
    blockquote: mdxBlockQuote,
    strong: mdxStrong,
    img: Image,
    Image,
    Wrapper,
    ...components,
  }
}