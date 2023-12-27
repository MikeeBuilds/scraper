type Props = {
    params: {
        id: string
    }
}



const ProductDetails = ({ params: { id } }: Props) => {
  const product = await

  return (
    <div>{ id }</div>
  )
}

export default ProductDetails