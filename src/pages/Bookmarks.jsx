import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utilitiy";
import Blog from "../components/Blog";
import EmptyState from "../components/EmptyState";

export default function Bookmarks() {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    const storedBlogs = getBlogs()
    setBlogs(storedBlogs)

  },[])

  const handleDelete = id =>{
    deleteBlog(id)
    const storedBlogs = getBlogs()
    setBlogs(storedBlogs)
  }
  if (blogs.length < 1) return <EmptyState message={'No Bookmarks available!'} address={'/blogs'} label={'Go To Blogs'}></EmptyState>
  return (
    <div className="container mx-auto">
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-8">
      {blogs.map((blog) => (
        <Blog handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></Blog>
      ))}
    </div>
    </div>
  );
}
