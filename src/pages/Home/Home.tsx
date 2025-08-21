import { Link } from "react-router-dom"
import { ProductCardContainer } from "../../components"

const Home = () => {
  return (
    <div>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>

        <ProductCardContainer search="pipjas" limit={50} />
    </div>
  )
}

export default Home