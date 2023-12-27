import { Product } from '@/types'
import Link from 'next/link'
import React from 'react'

interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`} className=''>ProductCard</Link>
  )
}

export default ProductCard