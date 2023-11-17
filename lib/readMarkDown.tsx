import path from "path"
import fs,{promises as fsPromise} from "fs"
import matter from 'gray-matter';

export const readMarkDown = async () => {
  //1.获取markDown文件路径
  let markDownDir = path.join(process.cwd(),"markdown")
  //2.获取文件名称
  let fileList = await fsPromise.readdir(markDownDir)
  //3.准备存放数据的数组
  let dataArr:markData = []

  //4.遍历每个文件，读取里面的文件并push到存放数据的数组中
  fileList.map(file => {
    let filePath = path.join(markDownDir,file)
    let value = fs.readFileSync(filePath,"utf-8")

    //通过gray-matter这个插件来解析md文件
    let {data:{title,date},content} = matter(value)
    dataArr.push({
      date,
      title,
      content
    })
  })
  //5.返回数据
  return dataArr
}

export const readMarkDownData = (id:string) => {
  let markDownDir = path.join(process.cwd(),"markdown")
  let filePath = path.join(markDownDir,`${id}.md`)
  let fileData = fs.readFileSync(filePath)
  let data = matter(fileData)
  return {
    content:data.content,
    title:data.data.title,
    date:data.data.date
  }
}

export const getMarkDownIds = () => {
  let markDownDir = path.join(process.cwd(),"markdown")
  let fileList = fs.readdirSync(markDownDir)
  let dataArr = fileList.map((item) => {
    return item.replace(".md","")
  })
  return dataArr
}
