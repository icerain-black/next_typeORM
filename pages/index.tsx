import { IncomingHttpHeaders } from "http";
import { GetServerSideProps, NextPage } from "next";
import React from "react";

type Props = {
  header:IncomingHttpHeaders
}

const index:NextPage<Props> = (props) => {
  let header = props.header
  return (
    <>
      <div>index.tsx</div>
      <div>{header["user-agent"]}</div>
    </>
  )
}

export default index

export const getServerSideProps:GetServerSideProps = async ({req,res}) => {
  let result = req.headers

  return {
    props:{
      header:result
    }
  }
}