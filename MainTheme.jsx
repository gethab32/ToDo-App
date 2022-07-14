import React from 'react'
import MyInput from './MyInput'
import TodoList from './TodoList'
import NavBar from './NavBar'
import { useState } from 'react'
const MainTheme = () => {
  const [posts, setPosts]= useState([])
  const [filtered, setFiltered]=useState([])
  const [status, setStatus]=useState(true)
  const [count, setCount]=useState(0)
  const getNormalMinutes=()=>{
    let minutes=new Date().getMinutes()
    if(minutes<10){
      minutes='0'+minutes
    }return minutes
    
  }
  const ifHasPosts=()=>{
    if(filtered.length!==0){
      return true
    }else{
      return false
    }
  }
  let IFposts=ifHasPosts()
  const createNewPost=(title)=>{
    if(title){
      let date= {hours: new Date().getHours(), minutes: getNormalMinutes()}
      let NumberDate=new Intl.DateTimeFormat().format(Date.now())
      let HoursDate=date.hours+':'+date.minutes
      const newPost={title:title,status: status,NumberDate:NumberDate, HoursDate:HoursDate}
      setPosts([...posts, newPost])
      setFiltered([...filtered, newPost])
      
    }
  }
  const onTodoListChange = (inc) => {
    setCount(count + inc)
  }
  
  const filterPosts=(status)=>{
    if(status==='all'){
      setFiltered(posts)
    }
    if(status===true){
      const newList=[...posts].filter(p=>p.status===status)
      setFiltered(newList)
    }
    if(status===false){
      const newList2=[...posts].filter(p=>p.status===status)
      setFiltered(newList2)
    }
  }
  return (
    <>
      <div className="main_theme">
        <MyInput createNewPost={createNewPost}/>
        <h1 className={IFposts ?'no_posts' : 'yes_posts'}>Задач нет!</h1>
        {filtered.map((post)=>
          <TodoList allPosts={filtered}  NumberDate={post.NumberDate}  key={post.HoursDate} title={post.title} HoursDate={post.HoursDate} onTodoListChange={onTodoListChange}/>)}
      </div>
      <NavBar HowChecked={count} filterPosts={filterPosts}/>
    </>
  )
}

export default MainTheme;