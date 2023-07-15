// Dependencies
import { FC, useMemo } from "react";



const SalesTable: FC = () => {

  const salesData = useMemo(()=> [
    {
      id: 1,
      number: 42135,
      name: "Ahmed Ali",
      amount: "$ 5220.00",
      status: "Closed",
      date: "20-Jan-2023"
    },
    {
      id: 2,
      number: 54678,
      name: "John Smith",
      amount: "$ 3200.00",
      status: "Open",
      date: "15-Feb-2023"
    },
    {
      id: 3,
      number: 98345,
      name: "Sara Johnson",
      amount: "$ 1200.00",
      status: "Closed",
      date: "10-Mar-2023"
    },
    {
      id: 4,
      number: 76543,
      name: "Mohammed Rahman",
      amount: "$ 6500.00",
      status: "Open",
      date: "05-Apr-2023"
    },
    {
      id: 5,
      number: 23456,
      name: "Emily Davis",
      amount: "$ 4200.00",
      status: "Closed",
      date: "01-May-2023"
    },
    {
      id: 6,
      number: 78901,
      name: "David Kim",
      amount: "$ 8200.00",
      status: "Open",
      date: "27-May-2023"
    },
    {
      id: 7,
      number: 43210,
      name: "Sophia Lee",
      amount: "$ 2300.00",
      status: "Closed",
      date: "22-Jun-2023"
    },
    {
      id: 8,
      number: 87654,
      name: "Jacob Brown",
      amount: "$ 4200.00",
      status: "Open",
      date: "18-Jul-2023"
    },
    {
      id: 9,
      number: 10987,
      name: "Emma Wilson",
      amount: "$ 5300.00",
      status: "Closed",
      date: "13-Aug-2023"
    },
    {
      id: 10,
      number: 32109,
      name: "William Turner",
      amount: "$ 7200.00",
      status: "Open",
      date: "09-Sep-2023"
    }
  ],[])



  return (
    <div className="card">
      <div className="card-header">
        <h1 className="card-title text-xl">Best Sales</h1>
        <p className="card-paragraph mt-1">Last Best 10 Sales in The Week.</p>
      </div>
      <div className="card-body table-responsive">
        <table className="table">
          <thead>
            <th>No*</th>
            <th>Sale ID</th>
            <th>Customer Name</th>
            <th>Sale Price</th>
            <th>State</th>
            <th>Sale at</th>
          </thead>
          <tbody>
            {
              salesData.map((customer)=> (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.number}</td>
                  <td>{customer.name}</td>
                  <td>{customer.amount}</td>
                  <td >
                    <span className={`status ${customer.status === "Open" ? "enabled" : "disabled"}`}>{customer.status}</span>
                  </td>
                  <td>{customer.date}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SalesTable;