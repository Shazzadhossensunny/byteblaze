import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Home from "../../pages/Home";
import Blogs from "../../pages/Blogs";
import BlogDetails from "../BlogDetails";
import Bookmarks from "../../pages/Bookmarks";
import Content from "../Content";
import Author from "../Author";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
          loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=20')
        },
        {
         path: "/blog/:blogId",
         element:<BlogDetails></BlogDetails>,
         loader: ({params}) => fetch(`https://dev.to/api/articles/${params.blogId}`),
         children: [
            {
              index: true,
              element: <Content></Content>,
              loader: ({params}) => fetch(`https://dev.to/api/articles/${params.blogId}`),
            },
            {
              path: "author",
              element: <Author></Author>,
              loader: ({params}) => fetch(`https://dev.to/api/articles/${params.blogId}`),
            },
         ]
        },
        {
          path: "/bookmarks",
          element: <Bookmarks></Bookmarks>,
        },
      ]
    },
  ]);