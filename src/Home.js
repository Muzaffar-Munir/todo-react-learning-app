// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // let [counter, setCounter] = useState(0);
    // npx json-server --watch  data/db.json --port 8000
    // binding useState for reactive property
    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIspending] = useState(true);
    // const [error, setError] = useState(null);
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // const deleteBlog = (id) => {
    //     const filteredBblogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(filteredBblogs);
    // }
    return (
        <div className="home">
            {isPending && <div>Loading ....</div>}
            {error && <div>{error}</div>}
            {/* input(pass props) data to component */}
            {/* getting response from chold blogsList component and calling deleteBlog function to do anything in parent */}
            {/* { blogs &&    <BlogList blogs={blogs} title="All Blogs!" handleDelete={deleteBlog} />} */}

            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

        </div>

    );
}

export default Home;