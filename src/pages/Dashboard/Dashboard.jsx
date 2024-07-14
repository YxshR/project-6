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
          md: "repeat(2, 1fr)",
        }}
        gap="6"
        >
          <GridItem colSpan={2}>
            <PortfolioSection />
          </GridItem>
          <GridItem colSpan={1}>
            <PriceSection />
          </GridItem>
          <GridItem colSpan={1}>
            <Transaction />
          </GridItem>
          <GridItem colSpan={1}>
            <Infovard />
          </GridItem>
        </Grid>
    </DashboardLayout>
  )
}

export default Dashboard