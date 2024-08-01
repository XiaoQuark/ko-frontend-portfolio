import React, { useState } from "react";

export function WorkFilters({ categories, setFilter }) {
	const [active, setActive] = useState(0);

	const handleClick = (e, index) => {
		setFilter({ name: e.target.textContent.toLowerCase() });
		setActive(index);
	};

	return (
		<ul className="works-filters">
			{categories.map((item, index) => {
				return (
					<li
						onClick={(e) => {
							handleClick(e, index);
						}}
						// className="category"
						className={`${
							active === index ? "active-category" : ""
						} category`}
						key={index}
					>
						{item.name}
					</li>
				);
			})}
		</ul>
	);
}
