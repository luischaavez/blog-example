import { useState, useEffect } from "react";
import axios from "axios";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Blogs</h1>

      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <p>{blog.author}</p>
          </li>
        ))}
      </ul>

      <form>
        <input type="text" name="title" placeholder="Title" />
        <textarea name="description" placeholder="Description" />
        <input type="text" name="author" placeholder="Author" />
      </form>
    </div>
  );
}
