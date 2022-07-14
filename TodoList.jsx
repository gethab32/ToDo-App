import React from 'react'
import { useState } from 'react'
const TodoList = (props) => {
  const [ifDone, SetIfDone]=useState(false)
  const setdone=(e)=>{
    SetIfDone(!ifDone)
    if (ifDone) {
      props.onTodoListChange(-1)
      
    }
    else {
      props.onTodoListChange(1)
    }
    props.allPosts.map(post=>{
      if(props.title===post.title){
        post.status=ifDone
      }
    })
  }
  return (
    <>
      <div className="todo_item">
        
        <div className='checkbox'>
          <label className="container">
            <input type="checkbox"/>
            <span className="checkmark" onClick={setdone}></span>
          </label>
          <h1 className={ifDone ? 'done' : 'doesnt_done'} id={ifDone? 'done-ID' : 'doesnt_done-ID'}>{props.title}</h1>
        </div>
        <div>
          <h2>{props.NumberDate}</h2>
          <h3>{props.HoursDate}</h3>
        </div>
      </div>
    </>
  )
}

export default TodoList