import { useLoaderData } from "react-router-dom";
import ErrorImg from "../assets/404.jpg";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

export default function Content() {
  const blog = useLoaderData();
  const {title, cover_image, tags, body_html, url } = blog;

  return (
    <div className="border-2 p-2 border-primary border-opacity-30">
      <div className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || ErrorImg}
        />
        <div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:dark:border-gray-400">
            {tags.map((tag, index) => (
              <a
                key={index}
                className="px-3 py-1 rounded-sm hover:underline dark:dark:bg-violet-400 dark:dark:text-gray-900"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
        <div className=" space-y-2">
          <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </a>
          <Markdown className='overflow-hidden' rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </div>
    </div>
  );
}
