import { Link } from "react-router-dom";
import waveImg from '../assets/wave.svg'

export default function Home() {
  return (
    <div>
      <div className="hero flex justify-center flex-col items-center minHeight">
      <div className="hero-content text-center flex-grow">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">ByteBlaze</span>
          </h1>
          <p className="py-6">
            ByteBlaze is the bridge between the complex world of technology and
            the curious minds eager to understand it
          </p>
         <div className="space-x-3">
         <Link
            to={'/blogs'}
            class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-secondary rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
              Read Blogs
            </span>
            <span className="relative invisible">Read Blogs</span>
          </Link>
          <Link
            to={'/bookmarks'}
            class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-secondary rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
            Bookmarks
            </span>
            <span className="relative invisible">Bookmarks</span>
          </Link>
         </div>
        </div>
      </div>
      <img className="w-full" src={waveImg} alt="" />
    </div>

    </div>
  );
}
