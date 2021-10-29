
import '../static/css/blog.css';

import axios from 'axios';
import React,{useState, useEffect} from 'react';

const url = 'http://localhost/wp-json/wp/v2/reviews/';

function Blog() {
    const [readMore,setReadMore]=useState(false);
    const [post1, setPost1] = useState()
    
    useEffect(()=>{
        console.log("work")
        const our_post = axios.get(url);
        our_post.then(response => {
            setPost1(response.data);
            console.log("No of posts is",response.data)
        })
    })

    // console.log(post1[0].slug)

    const extraContent_1=<div>
        {post1 && (
            <p className="extra-content">{post1[0].excerpt.rendered}
      </p>
      )}
    </div>

    const extraContent_2=<div>
        {post1 && (
            <p className="extra-content">{post1[1].excerpt.rendered}
      </p>
      )}
    </div>

    const extraContent_3=<div>
        {post1 && (
            <p className="extra-content">{post1[2].excerpt.rendered}
      </p>
      )}
    </div>

    const linkName=readMore?'Read Less << ':'Read More >> '

    const handleClick=()=>{
        setReadMore(!readMore)
        document.getElementById("blog-box").setAttribute("new-blog-box", "new-style");
    }

    return (
        <section className="blog" id = "blog">
            <h1 className="page-heading">Blog Page</h1>
            <div className="blogs">
                {post1 && (
                <div>
                    <div className="blog-box" id="blog-box">
                        <a className="blog-topic">{post1[0].slug}</a>
                        <p className="blog-content">{post1[0].excerpt.rendered}</p>
                        <a className="read-more-link" onClick={handleClick}><a>{linkName}</a></a>{readMore && extraContent_1}
                    </div>

                    <div className="blog-box" id="blog-box">
                        <a className="blog-topic">{post1[1].slug}</a>
                        <p className="blog-content">{post1[1].excerpt.rendered}</p>
                        <a className="read-more-link" onClick={handleClick}><a>{linkName}</a></a>{readMore && extraContent_2}
                    </div>

                    <div className="blog-box" id="blog-box">
                        <a className="blog-topic">{post1[2].slug}</a>
                        <p className="blog-content">{post1[2].excerpt.rendered}</p>
                        <a className="read-more-link" onClick={handleClick}><a>{linkName}</a></a>{readMore && extraContent_3}
                    </div>
                </div>
                )}
            </div>
        </section>
    )
}

export default Blog