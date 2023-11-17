import { GetStaticProps, NextPage } from "next"
import {readMarkDown} from "@/lib/readMarkDown"
import Link from "next/link"

type props = {
  posts:markData
}
const posts:NextPage<props> = (props) => {
  let posts = props.posts

  return (
    <>
      <div>
        文章列表
        {posts.map(item => {
          return (
            <div key={item.title}>
              <Link href={"/posts/" + item.title} >
                {item.title}
              </Link>
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default posts

export const getStaticProps:GetStaticProps = async () => {

  let posts = await readMarkDown()

  return {
    props:{
      posts
    }
  }
}