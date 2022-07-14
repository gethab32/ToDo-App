import React from 'react'

const TodoItem = (...props) => {
  const [ifDone, SetIfDone]=useState(false)
  const setdone=(e)=>{
    SetIfDone(!ifDone)
    const h=document.getElementById('title_todo')
    props.getTitle(h)
  }
  return (
    <div className="todo_item">
        
        <div className='checkbox'>
          <label className="container">
            <input type="checkbox"/>
            <span className="checkmark" onClick={setdone}></span>
          </label>
          <h1 className={ifDone ? 'done' : 'doesnt_done'} id='title_todo'>{props.title}</h1>
        </div>
        <div>
          <h2>{props.NumberDate}</h2>
          <h3>{props.HoursDate}</h3>
        </div>
      </div>
  )
}

export default TodoItem