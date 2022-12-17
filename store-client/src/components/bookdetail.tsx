import Book from "../model/book";

function BookDetail(props: Book) {

  return (
    <div className="element">
      <div>{props.title}</div> 
      <div>{props.price}</div>
      <div>{props.stockAmount}</div>
      <div>{props.category?.title}</div>
    </div>
  )
}

export default BookDetail;