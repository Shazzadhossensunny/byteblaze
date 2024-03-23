import { Link } from "react-router-dom"
import ErrorImg from '../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";

export default function Blog({blog,deletable , handleDelete}) {
    const {id, title, description,cover_image, published_at} = blog
  return (
    <div className="relative">
		<div className="border-2 p-2 border-primary hover:border-secondary hover:scale-105 transition-all border-opacity-30">
        <Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || ErrorImg} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
    </div>
	{deletable && <div onClick={()=>handleDelete(id)} className="absolute -top-5 -right-5 bg-secondary p-2 rounded-full"><MdDeleteForever size={25} className="text-white"></MdDeleteForever></div>}
	</div>
  )
}
