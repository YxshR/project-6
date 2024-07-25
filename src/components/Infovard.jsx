import { Tag, Text } from "@chakra-ui/react"
import { CustomCard } from "../chakra/CustomCard"

const Infovard = (imgUrl, text, tagText, inverted) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bg={inverted ? "p.purple" : "white"} bgRepeat="no-repeat">
        <Tag bgColor={inverted ? "p.purple" : "white"} color={inverted ? "White" : "p.purple"} borderRadius="full">{tagText}</Tag>
        <Text textStyle="h5" mt="4" fontWeight="medium " color={inverted ? "white" : "black.80"}>{text}</Text>
    </CustomCard>
  )
}

export default Infovard