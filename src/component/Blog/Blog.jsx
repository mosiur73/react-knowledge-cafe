import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";


const Blog = ({blog,handleBookmark,handleMarkRead}) => {
   const {title,cover,author_img,author,posted_date,reading_time,hashtags}=blog
    return (
        <div className='space-y-4 mb-8'>
            <img className='w-full' src={cover} alt="" />
           <div className='flex justify-between'>
           <div className='flex gap-3'>
                <img className='w-14' src={author_img} alt="" />
               <div>
               <h2 className='text-2xl'>{author}</h2>
               <p>{posted_date}</p>
               </div>
            </div>
            <div className='flex gap-2 items-center'>
            <h4>{reading_time} min read </h4>
            <button className='text-2xl' onClick={()=>handleBookmark(blog)}><FaBookmark /></button>
            </div>
           </div>
            <h2>title:{title} </h2>
            {
                hashtags.map((hash,idx) => <span key={idx} ><a href="">#{hash}</a></span> )
            }
            <div>
            <button onClick={()=>handleMarkRead(reading_time)} className='text-purple-700 font-bold underline'>Mark as Read</button>
            </div>
        </div>
    );
};
Blog.PropTypes={
    blog:PropTypes.object.isRequired
    
   
}

export default Blog;