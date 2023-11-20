import App from "next/app";
import { AppDataSource } from "./data-source"
import "reflect-metadata"

AppDataSource.initialize().then(async () => {

    console.log(AppDataSource);
    //关闭连接数据库
    AppDataSource.close();

}).catch(error => console.log(error))
