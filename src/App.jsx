
import Dashboard from "./pages/Dashboard/Dashboard"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TransactionPage from "./pages/Transaction/Transaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "Transaction",
    element: <TransactionPage />,
  },
  {
    path: "Support",
    element: <Support />,
  },
]);


function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
