import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
const MyInput = ({createNewPost}) => {
    const [value, setValue]= useState('')
    const addPost=()=>{
      createNewPost(value)
      setValue('')
    }
    const addPostWitPressKey=(e)=>{
      if(e.code==="Enter"){
        createNewPost(value)
        setValue('')
      }
    }
  return (
    <div className='input_withar'>
      <div className='arr' onClick={addPost}>
        <FontAwesomeIcon icon={faArrowDown}/>
      </div>
      <div className="todo_input">
        <input 
          type="text" 
          placeholder="What needs to be done?"
          onChange={e=>setValue(e.target.value)}
          onKeyDown={addPostWitPressKey}
        />
      </div>
    </div>

  )
}


export default MyInput