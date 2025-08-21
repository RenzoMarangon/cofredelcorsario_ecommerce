import { api } from "./axios.services";
import type { Product, ProductDTO } from "../models";
import axios from "axios";

const mapProduct = (dto: ProductDTO): Product => ({
  id: dto.id,
  name: dto.title,
  price: dto.price,
  description: dto.description,
  category: dto.category,
  image: dto.image
});

//GET Products

export const getProducts = async( limit = 10 ):Promise<Product[]> => {

  try {
    const { data } = await api('https://fakestoreapi.com').get<ProductDTO[]>(`/products?limit=${limit}`);
    return data.map(mapProduct);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching products: ${error.message}`);
    }

    throw new Error('No se pudo obtener la lista de productos');
  }
}

export const getProductById = async( id: number ):Promise<Product> => {
  try {
    const { data } = await api('https://fakestoreapi.com').get<ProductDTO>(`/products/${id}`);
    return mapProduct(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching product with id ${id}: ${error.message}`);
    }

    throw new Error(`No se pudo obtener el producto con id ${id}`);
  }
}

export const getProductsByCategory = async( category: string, limit = 10 ):Promise<Product[]> => {
  try {
    const { data } = await api('https://fakestoreapi.com').get<ProductDTO[]>(`/products/category/${category}?limit=${limit}`);
    return data.map(mapProduct);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching products in category ${category}: ${error.message}`);
    }

    throw new Error(`No se pudo obtener la lista de productos en la categoría ${category}`);
  }
}
export const getAllCategories = async():Promise<string[]> => {
  try {
    const { data } = await api('https://fakestoreapi.com').get<string[]>(`/products/categories`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching categories: ${error.message}`);
    }

    throw new Error('No se pudo obtener la lista de categorías');
  }
}


export const getProductsBySearch = async (query: string, limit = 20): Promise<Product[]> => {
  const products = await getProducts(limit);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  if( filtered.length === 0 ) {
    throw new Error('NO_RESULTS');
  }

  return filtered;
};