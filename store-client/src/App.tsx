import Category from "./model/category";
import repo from "./repo"
import { useEffect, useState } from 'react'
function App() {
  const [categoryList, setCategoryList] = useState<Category[]>([])

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
  </div>

  )
}

export default App;


