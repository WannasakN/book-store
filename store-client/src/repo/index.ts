import { CategoryRepository } from "./categoryrepo";
import { BookRepository } from "./bookrepo";
const repositories = {
    categories: new CategoryRepository(),
    books: new BookRepository(),

}

export default repositories