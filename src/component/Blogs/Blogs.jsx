import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmark,handleMarkRead}) => {
    const [blogs,setblogs]=useState([])

    useEffect( ()=>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data =>setblogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h2>blogs:{blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                     key={blog.id} 
                     blog={blog} 
                     handleBookmark={handleBookmark}
                     handleMarkRead={handleMarkRead}
                     ></Blog>)
            }
        </div>
    );
};
Blogs.PropTypes={
    handleBookmark:PropTypes.func
    
}
export default Blogs;