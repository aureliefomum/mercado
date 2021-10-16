import {Link} from 'react-router-dom'


const TopNav = () => (
    <div className="nav bg-ight d-flex justify-content-between">
      <Link className="nav-link" to="/">
        Home
        </Link>
      <Link className="nav-link" to="/login">
        Login
        </Link>
      <Link className="nav-link" to="/register">
        Register
        </Link>
    </div>
 )

 export default TopNav