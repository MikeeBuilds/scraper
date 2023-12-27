import { getProductById } from "@/lib/actions"
import { redirect } from "next/navigation"

type Props = {
    params: {
        id: string
    }
}



const ProductDetails = async ({ params: { id } }: Props) => {
  const product = await getProductById(id);

  if(!product) redirect('/');

  return (
    <div className="product-container">
        <div>
            <div>
                <Image
            </div>
        </div>
    </div>
  )
}

export default ProductDetails