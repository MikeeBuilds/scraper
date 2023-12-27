import Image from "next/image"

interface Props {
    title: string
    iconSrc: string
    value: string
    borderColor: string
}

const PriceInfoCard = ({ title, iconSrc, value, borderColor}: Props) => {
  return (
    <div className={`price-info+card border-1-[${borderColor}]`}>
        <p className="text-base text-black-100">{title}</p>

        <div className="flex gap1">
           <Image src={iconSrc} alt="" width={24} height={24} />
        </div>
    </div>
  )
}

export default PriceInfoCard