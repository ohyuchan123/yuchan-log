import { CONFIG } from "site.config"
import { getPosts } from "../apis/notion-client/getPosts"
import { GetServerSidePropsContext } from 'next'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const posts = await getPosts()
  const dynamicPaths = posts.map((post) => `${CONFIG.link}/${post.slug}`)

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${CONFIG.link}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${dynamicPaths.map((url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}
    </urlset>`

  ctx.res.setHeader('Content-Type', 'application/xml')
  ctx.res.write(sitemap)
  ctx.res.end()

  return {
    props: {},
  }
}

const SitemapIndex = () => null
export default SitemapIndex