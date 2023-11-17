import {readMarkDownData,getMarkDownIds} from "@/lib/readMarkDown"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"

type Props = {
  marklist:{
    content:string,
    title:string,
    date:string
  }
}

const postId:NextPage<Props> = (props) => {
  return (
    <>
      <h1>{props.marklist.title}</h1>
      <article>
        <p>{props.marklist.date}</p>
        <div dangerouslySetInnerHTML={{__html:props.marklist.content}}></div>
      </article>
    </>
  )
}

export default postId

export const getStaticPaths:GetStaticPaths = async () => {
  let idList = await getMarkDownIds()

  return {
    paths: idList.map(item => ({params:{id:item}})),
    fallback: 'blocking',
  }
}

export const getStaticProps:GetStaticProps = async (context:any) => {
  const id = context.params?.id
  const marklist = await readMarkDownData(id)
  
  return {
    props: {
      marklist
    }
  }
}