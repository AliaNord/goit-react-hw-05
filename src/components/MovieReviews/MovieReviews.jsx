import { useEffect, useState } from "react";
import { fetchReviewsById } from "../../services/api";
import { useParams } from "react-router-dom";
import s from './MovieReviews.module.css'

const MovieReviews = () => {
  const params = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetchReviewsById(params.movieId).then((data) => setReview(data));
  }, [params.movieId]);
  return (
    <div>
      <ul className={s.list}>
        {review.map((item) => (
          <li key={item.id} className={s.listItem}>
            <p className={s.author}>Author: {item.author}</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
