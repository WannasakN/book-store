import Book from "../model/book";
interface iRepository<T>{
    getAll():Promise<T[] | null>;
}
export class BookRepository implements iRepository<Book> {
    async getAll(): Promise<Book[] | null> {
        return [
            {
                id: 1, title: 'Harry Potter', price: 560, stockAmount:10 ,
                category:{id:2, title:'Fantasy'}
            }
        ]
    }
}
   