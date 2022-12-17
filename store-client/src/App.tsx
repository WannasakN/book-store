import Category from "./model/category";
import repo from "./repo"
import BookDetail from "./components/bookdetail";
import { useEffect, useState } from 'react'
function App() {
  const [categoryList, setCategoryList] = useState<Category[]>([])
  const Book = {
    id: 1, title: 'Harry Potter', price: 560 , stockAmount: 1,
    category:{id: 1 , title: 'Fantasy'}
  }
  
  const fetchCategoryList = async () => {
    const result = await repo.categories.getAll()
    if (result) {
      setCategoryList(result)
    }
  }

  useEffect(() => {
    fetchCategoryList()
  })

  return (
    <div>
    {categoryList.map(category => <p key=
    {category.id}> ID : {category.id} Title : 
    {category.title}</p>)}
    <BookDetail {...Book} key={Book.id}/>
  </div>
  ) 
}

export default App;


