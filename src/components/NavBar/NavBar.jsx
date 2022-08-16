import "./NavBar.css";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
function NavBar(idCategory) {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <ul className='nav-ul'>
        <NavLink to ={"/"}><img className="ul-img" alt="logo gamer" src="/logo.jpg"></img></NavLink>
        <NavLink to={`category/teclados`} className='ul-li'><li>Teclados Gamers</li></NavLink>
        <NavLink to={`category/monitor`} className='ul-li'><li>Monitores</li></NavLink>
        <NavLink to={`category/mouses`} className='ul-li'><li>Mouses Gamers</li></NavLink>
        <CartWidget />
      </ul>
    </nav>
    </header >
  )
}
export default NavBar