// Dependencies
import { FC } from "react";


// Assets

const TopClients = ()=>{
	const clients = [
	  {
	    id: 1,
	    first_name: "Youssef",
	    last_name: "Bibabwy",
	    purchases: 405.20,
	    image: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
	  },
	  {
	    id: 2,
	    first_name: "Sarah",
	    last_name: "Johnson",
	    purchases: 250.00,
	    image: "https://t3.ftcdn.net/jpg/04/04/36/15/360_F_404361503_IzvMkZV9GOXtXtCwX0N7e3QhZ5HgTJZa.jpg"
	  },
	  {
	    id: 3,
	    first_name: "Michael",
	    last_name: "Lee",
	    purchases: 750.50,
	    image: "https://t3.ftcdn.net/jpg/02/88/37/49/360_F_288374992_7zU5I6hOZ8J9cOeYt4KfZ7AqG9u1mQdi.jpg"
	  },
	  {
	    id: 4,
	    first_name: "Amanda",
	    last_name: "Smith",
	    purchases: 1200.25,
	    image: "https://t4.ftcdn.net/jpg/02/86/47/10/360_F_286471080_PQ7jUu0L2D7HmYj0TbFV9JZu1uX2yOw2.jpg"
	  },
	  {
	    id: 5,
	    first_name: "Robert",
	    last_name: "Garcia",
	    purchases: 500.75,
	    image: "https://t3.ftcdn.net/jpg/02/95/12/51/360_F_295125164_5iM2w3K1tXqjZQ0lNLr3wYx5J8y7RZdQ.jpg"
	  },
	  {
	    id: 6,
	    first_name: "Emily",
	    last_name: "Jones",
	    purchases: 900.00,
	    image: "https://t3.ftcdn.net/jpg/03/29/07/32/360_F_329073269_3ZqzGwzQ5FZv5mKwGyV7zQY4c3VfJ5pQ.jpg"
	  },
	  {
	    id: 7,
	    first_name: "Daniel",
	    last_name: "Kim",
	    purchases: 300.50,
	    image: "https://t4.ftcdn.net/jpg/02/85/41/39/360_F_285413942_0wljq5ZJmCf4vJrJt1jXivQsZmucRr2N.jpg"
	  },
	  {
	    id: 8,
	    first_name: "Olivia",
	    last_name: "Brown",
	    purchases: 1500.00,
	    image: "https://t3.ftcdn.net/jpg/03/16/46/46/360_F_316464607_gH3oK7cHJmW2x7wZ2ZqYt7ZbWjkgVQrD.jpg"
	  },
	  {
	    id: 9,
	    first_name: "David",
	    last_name: "Nguyen",
	    purchases: 600.80,
	    image: "https://t4.ftcdn.net/jpg/02/99/10/57/360_F_299105782_dVqyvT6n2y8KzXjWx3yZFnqzZzZa7T9S.jpg"
	  },
	  {
	    id: 10,
	    first_name: "Sophia",
	    last_name: "Rodriguez",
	    purchases: 800.25,
	    image: "https://t3.ftcdn.net/jpg/03/09/70/94/360_F_309709442_i0d0fTz9vWv1g8Z23FqQbO3x9p0gvzGT.jpg"
	  }
	];

	return (
		<article className="card">
			<div className="card-header">
				<h3 className="card-title text-xl">Top Clients</h3>
				<p className="card-paragraph">Top 10 Clients This Week.</p>
			</div>
			<div className="card-body snap-x flex items-center justify-center gap-2 overflow-x-auto">
				{
					clients.map((client)=> (
						<article className="cursor-pointer snap-center flex flex-col items-center justify-center min-w-[250px] transition-all hover:-translate-y-5" key={client.id}>
							<img className="avatar avatar-lg" src={client.image} />
							<div className="mt-4 flex flex-col items-center justify-center gap-0">
								<h2>{client.first_name} {client.last_name}</h2>
								<p className="text-danger font-semibold">$ {client.purchases}</p>
							</div>
						</article>
					))
				}
			</div>
		</article>
	)
}

export default TopClients;