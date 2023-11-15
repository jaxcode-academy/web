import { getPostData } from '@/utils'
import { PortableText } from '@portabletext/react'

export default async function Post({ params }) {
  const slug = params.post
  const post = await getPostData(slug)
  console.log(post)

  return (
    <div>
      <img src={post.image} alt='' />
      <h1>{post.title}</h1>
      <PortableText value={post.content} />
    </div>
  )
}
