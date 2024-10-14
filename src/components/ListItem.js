const ListItem = ({ title, onDelete, className }) => {
  
  return (
    <div className="todo-item">
      <p>{title}&nbsp;</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}
  
  export default ListItem
  