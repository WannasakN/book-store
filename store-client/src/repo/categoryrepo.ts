import category from "../model/category";
import { IRepository } from "./IRepository";


export class CategoryRepository implements IRepository<category> {
  async getAll(): Promise<category[] | null>{
    return [
        {id:1, title:'Programming'},
        {id:2, title:'Life Style'}
    ]
  }
}  
   