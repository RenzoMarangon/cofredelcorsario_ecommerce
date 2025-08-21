import { useQuery } from "@tanstack/react-query"
import type { Product } from "../models"
import { getAllCategories, getProductById, getProducts, getProductsByCategory, getProductsBySearch } from "../services"

export const useProducts = (limit = 10) => {
    return useQuery<Product[], Error>({
        queryKey: ['products', limit],
        queryFn: () => getProducts(limit),
        staleTime: 1000 * 60 * 5,
    })
}

export const useProductById = (id: number) => {
    return useQuery<Product, Error>({
        queryKey: ['product', id],
        queryFn: () => getProductById(id),
        enabled: !!id, // solo corre si hay id
        staleTime: 1000 * 60 * 5,
    })
}

export const useProductsByCategory = (category: string, limit = 10) => {
    return useQuery<Product[], Error>({
        queryKey: ['products', 'category', category, limit],
        queryFn: () => getProductsByCategory(category, limit),
        enabled: !!category, // solo corre si hay categoría
        staleTime: 1000 * 60 * 5,
    })
}

export const useAllCategories = () => {
    return useQuery<string[], Error>({
        queryKey: ['categories'],
        queryFn: () => getAllCategories(),
        staleTime: 1000 * 60 * 5,
    })
}

export const useSearchProducts = ( query: string, limit = 10 ) =>{
    return useQuery<Product[], Error>({
        queryKey: ["products", "search", query, limit],
        queryFn: () => getProductsBySearch(query, limit),
        enabled: query.length > 0, // solo corre si hay query,
        retry: (failureCount, error: any) => {
            if (error.message === "NO_RESULTS") return false; // Si no hay resultados, no reintentar
            if (failureCount < 3) return true;               //Si es error de red, reintentar hasta 3 veces
            return false;
        },
        staleTime: 0, // no cache
    })
}