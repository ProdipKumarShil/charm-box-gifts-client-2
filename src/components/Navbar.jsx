import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { logout } from "../redux/firebase/authHandler"

const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user)
  const dispatch = useAppDispatch()
  const handleLogout = async () => {
    await logout(dispatch)
  }

  const links = [
    {
      to: '/',
      title: 'Home'
    },
    {
      to: '/about',
      title: 'About Us'
    },
    {
      to: '/contact',
      title: 'Contact Us'
    }
  ]
  return (
    <div className=" bg-base-100 pt-10 pb-4 border-b border border-gray-300">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <ul className="flex gap-12">
                {
                  links.map((link, index) => <li key={index}><Link className="text-black text-base" to={link.to}>{link.title}</Link></li>)
                }
              </ul>
            </ul>
          </div>
          <Link to='/' className="text-2xl font-bold text-black">Charm Box Gifts</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-12">
            {
              links.map((link, index) => <li key={index}><Link className="text-black text-base" to={link.to}>{link.title}</Link></li>)
            }
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="mr-4" to='/wishlist'>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </Link>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
              <li><button onClick={handleLogout} className='btn btn-success'>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar