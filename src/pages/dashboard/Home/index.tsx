// Dependencies
import { FC, lazy, Suspense } from "react";

// Bootstrap Components
import { Row, Col } from "react-bootstrap";

// Loading Component
import LoadingPlaceholder from "@/components/global/LoadingPlaceholder";

// Components
const DetailsCards = lazy(() => import("./components/DetailsCards"));
const ExpensesChart = lazy(()=> import("./components/ExpensesChart"));
const SalesChart = lazy(()=> import("./components/SalesChart"));
const SalesTopProducts = lazy(()=> import("./components/SalesTopProducts"));
const SalesTable = lazy(()=> import("./components/SalesTable"));
// const BranchesMap = lazy(()=> import("./components/BranchesMap"));
// const TopOrders = lazy(()=> import("./components/TopOrders"));
const TopClients = lazy(()=> import("./components/TopClients"));

const Home: FC = () => {


  return (
    <main className="home-page">
      <Suspense fallback={<LoadingPlaceholder />}>
        <Row className="gap-7 lg:gap-0">
          <Col xs="12" lg="8">
            <DetailsCards />
          </Col>
          <Col xs="12" lg="4">
            <ExpensesChart />
          </Col>
        </Row>
        <Row className="mt-8 gap-10 lg:gap-0">
          <Col xs="12" lg="4">
            <SalesTopProducts />
          </Col>
          <Col xs="12" lg="8">
            <SalesChart />
          </Col>
        </Row>
        <Row className="mt-8">
          <Col xs="12">
            <SalesTable />
          </Col>
        </Row>
        <Row className="mt-8">
          <Col xs="12">
            <TopClients />
          </Col>
        </Row>
        {/* <Row className="mt-10 gap-10 lg:gap-0">
          <Col xs="12" lg="5">
            <BranchesMap />
          </Col>
          <Col xs="12" lg="7">
            <TopOrders />
          </Col>
        </Row> */}
      </Suspense>
    </main>
  )
}

export default Home;
