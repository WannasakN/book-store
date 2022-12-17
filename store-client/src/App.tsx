import Category from "./model/category";
import repo from "./repo"
import BookDetail from "./components/bookdetail";
import { useEffect, useState } from 'react'
import Book from "./model/book";
function App() {
  const [bookList, setBookList] = useState<Book[]>([])
  const [categoryList, setCategoryList] = useState<Category[]>([])
  const [filter, setFilter] = useState<string>('')

  const fetchBookList = async () => {
    const result = await repo.books.getAll({categoryId: filter})
    if (result) {
      setBookList(result)
    }
  }

  const fetchCategoryList = async () => {
    const result = await repo.categories.getAll()
    if (result) {
      setCategoryList(result)
    }
  }

  const onCreateBook = async (book: Partial<Book>) => {
    await repo.books.create(book)
    fetchBookList()
  }

  const onUpdateBook = async (book: Partial<Book>) => {
    await repo.books.update(book)
    fetchBookList()
  }

  const onDeleteBook = async (id: number) => {
    await repo.books.delete(id)
    fetchBookList()
  }
  useEffect(() => {
    fetchCategoryList()
    fetchBookList()

  },[filter])


  return (
    <div>
      <div>
        <select onChange={e => setFilter(e.target.value)}>
          <option value={''}>All</option>
          {categoryList.map(category => <option key={category.id} value={category.id}>{category.title}</option>)}
        </select>
        <hr />
      </div>
      {bookList.map(book =>
        <div key={book.id}>
          <BookDetail {...book} />
        </div>
      )}
    </div>
  );
}


export default App;


