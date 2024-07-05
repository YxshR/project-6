import DashboardLayout from "../../components/DashboardLayout"
import PortfolioSection from "./component/PortfolioSection"


const Dashboard = ({}) => {
  return (
    <DashboardLayout title="DashBoard">
        <div>
           <PortfolioSection />
        </div>
    </DashboardLayout>
  )
}

export default Dashboard