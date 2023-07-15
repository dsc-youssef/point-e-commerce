// Dependencies
import { FC } from "react";

const DetailsCards: FC = () => {

	return (
		<div className="card">
			<div className="card-header">
				<h3 className="card-title text-lg mb-1">Today's Sales</h3>
				<p className="card-paragraph text-sm">Sales Summary</p>
			</div>
			<div className="card-body details-cards">
				<div className="details-card bg-danger/25">
					<i className="icon fas fa-coins bg-danger text-white" />
					<h3 className="value">$1k</h3>
					<p className="title">Total Sales</p>
					<p className="extra">+25% yesterday</p>
				</div>
				<div className="details-card bg-warning/25">
					<i className="icon fas fa-file-pen bg-warning text-white" />
					<h3 className="value">300</h3>
					<p className="title">Total Order</p>
					<p className="extra">+25% yesterday</p>
				</div>
				<div className="details-card bg-success/25">
					<i className="icon fas fa-chevrons-up bg-success text-white" />
					<h3 className="value">5</h3>
					<p className="title">Product Sold</p>
					<p className="extra">+25% yesterday</p>
				</div>
				<div className="details-card bg-primary/25">
					<i className="icon fas fa-user-plus bg-primary text-white" />
					<h3 className="value">8</h3>
					<p className="title">New Customers</p>
					<p className="extra">+25% yesterday</p>
				</div>
			</div>
		</div>

	)
}

export default DetailsCards;
