import { CustomCard } from "../chakra/CustomCard"

const Infovard = (imgUrl) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bgRepeat="">
        <Tag bg="purble" color="white" borderRadius="full">Loan</Tag>
    </CustomCard>
  )
}

export default Infovard