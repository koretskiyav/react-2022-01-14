import Review from "./review";

export default function Rewiews({ reviews, isVisible }) {

    return isVisible ? (
        <div>
            {reviews.map((review) => (
                <Review key={review.id} review={review} />
            ))}
        </div>
    ) : ('');
}