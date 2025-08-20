import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
    </div>
  )
}

export default Home