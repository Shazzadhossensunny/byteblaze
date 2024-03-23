import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {

  // const [theme, setTheme] = useState('light')
  // useEffect(()=>{
  //   localStorage.setItem('theme', theme)
  //   const localTheme = localStorage.getItem('theme')
  //   document.querySelector('html').setAttribute('data-theme', localTheme)

  // },[theme])

  // const handleToggle = (e) => {
  //   if(e.target.checked){
  //     setTheme('synthwave')

  //   }else{
  //     setTheme('light')
  //   }
  // }

  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem('theme');
    return localTheme ? localTheme : 'light'; // Default theme is 'light' if not stored in local storage
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'synthwave' : 'light'; // Toggle between 'light' and 'synthwave'
    setTheme(newTheme);
  };




  return (
    <nav className="navbar bg-base-100 shadow-lg px-4 lg:px-8">
      <div className="flex-1">
        <Link to={'/'} className="text-3xl font-bold gap-0 text-secondary">
          Byte<span className="text-primary">Blaze</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-10">
          <NavLink to={'/'} className="text-xl font-bold inline-block"> Home</NavLink>
          <NavLink to={'/blogs'} className="text-xl font-bold inline-block">Blogs</NavLink>
          <NavLink to={'/bookmarks'} className="text-xl font-bold inline-block">Bookmarks</NavLink>

        </ul>
        <div className="ml-5">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
             onChange={handleToggle}
             checked={theme === 'synthwave'}
              type="checkbox"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
}
