import { Button, Card, Flex, Icon } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import { AiOutlineDownload } from "react-icons/ai"


const TransactionPage = () => {
  return (
    <DashboardLayout>
        <Flex justify="end" mt="6" mb="3">

            <Button leftIcon={<Icon as = {AiOutlineDownload} />}> Export CSV</Button>

        </Flex>
        <Card>Transaction</Card>
    </DashboardLayout>
  )
}

export default TransactionPage