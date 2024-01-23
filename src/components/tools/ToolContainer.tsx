import Head from "next/head"

export default function ToolContainer({
  children,
  title,
  description,
  image,
  url,
  date,
  author,
  tags,
  type,
  slug,
  ...props
}: {
  children?: React.ReactNode
  title?: string
  description?: string
  image?: string
  url?: string
  date?: string
  author?: string
  tags?: string
  type?: string
  slug?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{title} - Web Utilities</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`${title} - Web Utilities`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`https://webutilities.dev/${url}`} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Web Utilities" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={date} />
        <meta property="article:author" content={author} />
        <meta property="article:tag" content={tags} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@webutilities" />
        <meta name="twitter:creator" content="@webutilities" />
        <meta name="twitter:title" content={`${title} - Web Utilities`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {children}
      </main>
    </div>
  )
}