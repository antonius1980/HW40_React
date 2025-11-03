import { NavLink, Link } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : '';


function Footer() {
    return (
        <footer className="footer">
        <nav className="mb-5">
            <div className="flex justify-between bg-gray-400">

                {/* <a href="/" className="brand-logo">React Movies</a> */}
                <Link to="/" className="">React Todo</Link>

                <ul id="nav-mobile" className="">
                    <li>
                        {/* <a href="/">Home</a> */}
                        <NavLink to='/' className={setActive}>Home</NavLink>
                    </li>
                    <li>
                        {/* <a href="/about">About Me</a> */}
                        <NavLink to='/about' className={setActive}>About Me</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </footer>
    )
}

export default Footer;