import { NextApiHandler } from "next"
import {readMarkDown} from "@/lib/readMarkDown";

const posts:NextApiHandler = async (req,res) => {
  let data = await readMarkDown()
  res.setHeader("Content-Type","text/json;charset=utr-8")
  res.statusCode = 200;
  res.write(JSON.stringify(data));
  res.end()
}

export default posts