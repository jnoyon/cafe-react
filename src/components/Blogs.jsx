import { useEffect, useState } from "react";
import Blog  from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('/blog.json')
         .then(res => res.json())
          .then(data => setBlogs(data))
    }, [])

    return(
        <div className="md:w-2/3">
           
           <div className="blogs grid md:grid-cols-2 gap-5">
                {blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)}

           </div>
        </div>
    )

    
    

}

export default Blogs;