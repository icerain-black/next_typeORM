import { AppDataSource } from "./data-source"
import "reflect-metadata"

AppDataSource.initialize().then(async (connect) => {

  connect.close()
}).catch(error => console.log(error))
