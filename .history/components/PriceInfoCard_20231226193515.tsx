
interface Props {
    title: string
    iconSrc: string
    value: string
    borderColor: string
}

const PriceInfoCard = ({ title, iconSrc, value, borderColor}: Props) => {
  return (
    <div className={`price-info+card border-1-[${borderColor}]`}>
        <p></p>
    </div>
  )
}

export default PriceInfoCard