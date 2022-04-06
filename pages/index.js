import {
  Hero,
  LatestPostsSection,
  ProjectsSectionList,
  DocumentHead
} from '../src/components'
import { getAllBlogPosts } from './blog'
import { ProjectsList } from '../src/data'
export const getRecentBlogPosts = async () => {
  const posts = await getAllBlogPosts()

  const recentPosts = posts
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, 10)

  return recentPosts
}

export const getStaticProps = async () => {
  const posts = await getRecentBlogPosts()

  const props = {
    posts
  }

  return {
    props
  }
}

const HomePage = ({ posts }) => {
  return (
    <>
      <DocumentHead pageTitle="Fatih – Sr. Full-Stack Developer." />
      <Hero />
     

      <LatestPostsSection posts={posts} />

      <ProjectsSectionList projects={ProjectsList} />
    </>
  )
}

export default HomePage
