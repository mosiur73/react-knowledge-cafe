
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmark from './component/Bookmark/Bookmark'
import Header from './component/Header/Header'

function App() {
  const [bookmark,setBookmark]=useState([])
  const [readingTime,setReadingTime]=useState(0)

  const handleBookmark=blog=>{
   const newBookmark=[...bookmark,blog]
   setBookmark(newBookmark)
    
  }
  const handleMarkRead=time=>{
    const newTime=readingTime + time;
    setReadingTime(newTime)
  }


  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleBookmark={handleBookmark} handleMarkRead={handleMarkRead}></Blogs>
     <Bookmark bookmark={bookmark} readingTime={readingTime}></Bookmark>
     </div>
     
     
    </>
  )
}

export default App
