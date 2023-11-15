import { getPosts } from '@/utils'

export default async function Home() {
  const posts = await getPosts()
  console.log(posts)

  return (
    <div>
      {posts.map((post) => (
        <a href={`/posts/${post.slug}`}>
          <img src={post.image} alt='' />
          <h3>{post.title}</h3>
          <p>{post.author}</p>
          <p>{new Date(post._createdAt).toLocaleDateString()}</p>
        </a>
      ))}
    </div>
  )
}
