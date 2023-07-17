// Dependencies
import { FC, useMemo } from "react";


const TopOrders: FC = () => {
  const ordersData = useMemo(() => [
    { id: 1, customerName: "John", amount: 25.99, state: "Processing", date: "2023-07-10", orderNumber: "ORD001" },
    { id: 2, customerName: "Emily", amount: 17.50, state: "Shipped", date: "2023-07-08", orderNumber: "ORD002" },
    { id: 3, customerName: "David", amount: 31.75, state: "Delivered", date: "2023-07-06", orderNumber: "ORD003" },
    { id: 4, customerName: "Sarah", amount: 22.00, state: "Processing", date: "2023-07-05", orderNumber: "ORD004" },
    { id: 5, customerName: "Michael", amount: 47.80, state: "Shipped", date: "2023-07-03", orderNumber: "ORD005" },
    { id: 6, customerName: "Karen", amount: 39.25, state: "Delivered", date: "2023-07-01", orderNumber: "ORD006" },
    { id: 7, customerName: "Tom", amount: 58.90, state: "Processing", date: "2023-06-29", orderNumber: "ORD007" },
    { id: 8, customerName: "Alice", amount: 12.45, state: "Shipped", date: "2023-06-27", orderNumber: "ORD008" },
    { id: 9, customerName: "Peter", amount: 26.80, state: "Delivered", date: "2023-06-25", orderNumber: "ORD009" },
    { id: 10, customerName: "Olivia", amount: 19.90, state: "Processing", date: "2023-06-23", orderNumber: "ORD010" }
  ], []);

  return (
    <article className="card card-container">
      <div className="card-header">
        <h3 className="card-title text-xl font-semibold">Top Orders</h3>
        <p className="card-paragraph text-sm mt-1">Last Best 10 Orders This Week.</p>
      </div>
      <div className="card-body table-responsive">
        <table className="table">
          <thead>
            <th>No*</th>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Amount</th>
            <th>State</th>
            <th>Order Date</th>
          </thead>
          <tbody>
            {
              ordersData.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.orderNumber}</td>
                  <td>{order.customerName}</td>
                  <td>{order.amount}</td>
                  <td >
                    <span className={`status ${order.state === "Delivered" ? "enabled" : "disabled"}`}>{order.state}</span>
                  </td>
                  <td>{order.date}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default TopOrders;
