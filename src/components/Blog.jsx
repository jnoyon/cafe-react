import PropTypes from "prop-types";

const Blog = ({blog}) => {
    const {cover, title, author_img, author, posted_date, reading_time, hashtags} = blog;
    
    return(
        <>  
            <div className="blog shadow-md text-left">
                <img src={cover} alt="" />
                <div className="info p-3 flex justify-between items-center">
                    <div className="left flex gap-3">
                        <img src={author_img} alt="image" className="w-10 h-10" />
                        <span className="span">
                            <h2 className="font-bold"> {author} </h2>
                            <p className="text-sm text-gray-600"> {posted_date} </p>
                        </span>
                    </div>
                    <div className="right">
                        <p className="text-gray-700"> {reading_time} min read </p>
                    </div>
                </div>
                <h1 className="font-bold text-2xl "> <a href="#"> {title} </a> </h1>
                <p className="text-gray-600  p-3">{
                     hashtags.map((hashtag, idx) => <span key={idx}> <a href="#"> #{hashtag} </a> </span>)
                }</p>
                <a href="#" className="underline block text-blue-600 font-bold p-3"> Mark as read </a>
            </div>
        </>
    );
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;