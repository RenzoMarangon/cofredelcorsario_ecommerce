import { useProducts, useSearchProducts } from "../../hooks"


interface Props{
    search?: string;
    limit?: number;
}

export const ProductCardContainer = ({search = "", limit = 10} : Props) => {

    const {data, isLoading, error } = useSearchProducts(search, limit);
    
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message === "NO_RESULTS" ? "No se encontaron coincidencias" : error.message}</div>

  return (
    <ul>
        
        {data?.map(product => (
            <li key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <img src={product.image} alt={product.name} />
            </li>
        ))}
    </ul>
  )
}
