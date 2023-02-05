import React, { useState } from "react";
import "./RatingCard.css";
import iconStar from "../images/icon-star.svg";
import thankYouImage from "../images/illustration-thank-you.svg";
export default function RatingCard() {
	const [index, setIndex] = useState(0);
	const [isRotate, setIsRotate] = useState(false);
	const [selectedStars, setSelectedStars] = useState(1);
	return (
		<div className={`card ${isRotate && "rotate"}`}>
			<div className="front">
				<div className="stars-container">
					{[
						{ val: 1, delay: 0.05 },
						{ val: 2, delay: 0.1 },
						{ val: 3, delay: 0.15 },
						{ val: 4, delay: 0.2 },
						{ val: 5, delay: 0.25 },
					].map((el, indexActive) => {
						return (
							<div className="star-container">
								<i
									style={{ transition: `transform 0.1s ease-in ${el.delay}s` }}
									className={`star-icon-wrapper ${
										indexActive <= index && "active"
									}`}
								>
									<img
										src={iconStar}
										alt="star-images"
										style={{ width: "18px", height: "18px" }}
									/>
								</i>
							</div>
						);
					})}
				</div>
				<div className="text">
					<h2>How did we go?</h2>
					<p>
						Please let us know how we did with your support request. All
						feedback is appreciated to help us improve our offering
					</p>
				</div>
				<div className="number-container">
					<ul className="number-list">
						{[1, 2, 3, 4, 5].map((el, indexEl) => {
							return (
								<li
									onClick={() => {
										setIndex(indexEl);
									}}
									className={`number ${indexEl === index && "active"}`}
								>
									{el}
								</li>
							);
						})}
					</ul>
				</div>
				<button
					className="btn-submit"
					type="submit"
					onClick={() => {
						setIsRotate(!isRotate);
						setSelectedStars(index + 1);
					}}
				>
					Submit
				</button>
			</div>
			<div className="back">
				<img
					src={thankYouImage}
					alt="thank you images"
					width={"180px"}
				/>
				<div className="selected-stars">
					You selected <span>{selectedStars}</span> out of 5
				</div>
				<div className="text">
					<h2>Thank you !</h2>
					<p>
						We appreciate you taking the time to give a rating. If you ever need
						more support, don't hesitate to get in touch!
					</p>
				</div>
			</div>
		</div>
	);
}
