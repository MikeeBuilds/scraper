import { getProductById } from "@/lib/actions"

type Props = {
    params: {
        id: string
    }
}



const ProductDetails = async ({ params: { id } }: Props) => {
  const product = await getProductById(id);

  if(!product) redi

  return (
    <div>{ id }</div>
  )
}

export default ProductDetails