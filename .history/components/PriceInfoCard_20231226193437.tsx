
interface Props {
    title: string
    iconSrc: string
    value: string
    borderColor: string
}

const PriceInfoCard = ({ title, iconSrc, value, borderColor}: Props) => {
  return (
    <div className={`price-ionfo`}>PriceInfoCard</div>
  )
}

export default PriceInfoCard