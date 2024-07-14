import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/CustomCard"
import { BsArrowUpRight } from "react-icons/bs"
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai"


const PriceSection = () => {

    const timestamps = ["7:15pm", "7:30pm", "8:00pm", "9:00pm", "10:00pm",]
  return (
    <CustomCard>
        <Flex justify="space-between" align="start">
            <Stack>
                <HStack color="black.80">
                    <Text fontSize="sm">Current Price</Text>

                </HStack>
                <HStack spacing={2}  
                align={{
                    base:"flex-start",
                    sm:"center",
                }}
                flexDir={{
                    base:"column",
                    sm  :"row",
                }}>
                    <HStack>
                        <Text textStyle="h2" fontWeight="medium">22.39401000</Text>
                    </HStack>
                    <HStack fontWeight="medium" color="green.500">
                        <Icon as={BsArrowUpRight} />
                        <Text fontSize="sm" fontWeight="medium">22%</Text>
                    </HStack>

                </HStack>
            </Stack> 
            <HStack>
                <Button 
                leftIcon={
                    <Icon as={AiFillPlusCircle} />
                }>Buy
                </Button>
                <Button             
                leftIcon={
                    <Icon as={AiOutlineMinusCircle} />
                }>Sell
                </Button>
            </HStack>
        </Flex>
        <Tabs variant='soft-rounded' >
           <Flex justify="end">
           <TabList bg="black.5" p="3px">
            {
                ["H1","1D", "1W", "1M",].map((tab) => (
                    <Tab _selected={{bg:"white",}} key={tab} fontSize="sm" p="6px" borderRadius="4">{tab}</Tab>
                ))
            }
                
            </TabList>
           </Flex>
            <TabPanels>
                <TabPanel>
                <Image w="100%" src="/Graph.png" mt="48px" />
                <HStack justify="space-between">
                    {
                        timestamps.map((timestamps) => (
                        <Text key={timestamps} fontSize="sm" color="black.80">{timestamps}</Text>
                    ))
                    }
                </HStack>
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
        
    </CustomCard>   
  )
}

export default PriceSection