import s from "./style.module.css";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";

export function TVShowDetail({ tvShow }) {
  const rating = (tvShow.vote_average / 2).toFixed(1);
  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating_container}>
        <span className={s.rating}>{rating} </span>
        <FiveStarRating rating={rating} />
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}
