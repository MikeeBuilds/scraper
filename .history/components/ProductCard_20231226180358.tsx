import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`} className='product-card'>
        <div>
            <Image
              src={product.image}
              alt=''
            />
        </div>
    </Link>
  )
}

export default ProductCard