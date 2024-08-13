import { Grid, GridItem } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import PortfolioSection from "./component/PortfolioSection"
import PriceSection from "./component/PriceSection"
import Transaction from "../../components/Transaction"
import Infovard from "../../components/Infovard"


const Dashboard = ({}) => {
  return (
    <DashboardLayout title="DashBoard">
        <Grid
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="6"
        >
          <GridItem colSpan={{
            base:1,
            lg: 2,
          }}>
            <PortfolioSection />
          </GridItem>
          <GridItem colSpan={1}>
            <PriceSection />
          </GridItem>
          <GridItem colSpan={1}>
            <Transaction />
          </GridItem>
          <GridItem colSpan={1}>
            <Infovard imgUrl="/dot.svg" text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it" tagText="Loan" inverted={false} />
          </GridItem>
          <GridItem colSpan={1}>
            <Infovard imgUrl="\Visual.svg" inverted={true} tagText="Contact" text="Learn more about our real estate, mortgage, and  corporate account services" />
          </GridItem>
        </Grid>
    </DashboardLayout>
  )
}

export default Dashboard