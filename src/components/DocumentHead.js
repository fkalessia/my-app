import Head from 'next/head'

const siteURL = 'https://ffatih.netlify.dev'
const author = 'Fatih '
const shortname = 'ffatih'
const description = 'Im Fatih  - Sr. Full-Stack Developer.'
const socialBanner = '/card.png'

const DocumentHead = ({
  pageTitle,

  postPath,
  canonicalUrl
}) => {
  let postUrl = `${siteURL}`

  if (postPath) {
    postUrl = `${siteURL}${postPath}/`
  }

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.jpg" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="#6B46C1" name="theme-color" />
      <meta content="#6B46C1" name="msapplication-TileColor" />
      <link rel="canonical" href={canonicalUrl} />

      <link rel="apple-touch-icon" href="/favivon.jpg" />
      <meta content={description} name="description" />
      <meta name="author" content={author} />
      <meta name="author" content={shortname} />
      <meta name="publisher" content={author} />
      <meta name="keywords" content="Im Fatih - Sr. Full-Stack Developer." />
      <meta name="robots" content="index,follow" />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      <meta property="og:title" content={pageTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:image:alt" content={socialBanner} />
      <meta property="og:url" content={postPath ? postUrl : siteURL} />
      <meta property="og:type" content={postPath ? 'article' : 'website'} />
      <meta
        property="og:site_name"
        content="Im Fatih  - Sr. Full-Stack Developer."
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={shortname} />
      <meta name="twitter:title" content="Fatih - Sr. Full-Stack Developer." />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialBanner} />
    </Head>
  )
}

export default DocumentHead
