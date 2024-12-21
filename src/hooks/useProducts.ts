import { ProductData } from '@/types/types'
import { useState, useEffect } from 'react'
import { products as productsData } from '@/mocks/products.json'
export function useProducts() {
	const [products, setProducts] = useState<ProductData[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	const fetchProducts = async () => {
		try {
			setLoading(true)
			const response = await fetch('/api/products')
			const data = await response.json()
			setProducts(data)
		} catch (e: unknown) {
			if (e instanceof Error) {
				setError(e.message)
			} else {
				setError('Error al cargar productos')
			}
			setProducts(productsData)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	return { products, loading, error }
}
