import Image from 'next/image'

export function mdxImage({
  src,
  alt,
}: Readonly<{
  src: string
  alt: string
}>) {
  return (
  <figure>
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      className="object-cover w-full h-full rounded-sm"
    />
    <figcaption className='text-muted-foreground/70 text-xs md:text-sm text-center my-2'>{alt}</figcaption>
  </figure>
  )
}