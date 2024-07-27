import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";
import s from './MovieCast.module.css'

const MovieCast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg = 'https://cs13.pikabu.ru/post_img/big/2023/09/11/5/1694416670162565263.jpg'
  useEffect(() => {
    fetchCastById(params.movieId).then((data) => setCast(data));
  }, [params.movieId]);
  console.log(cast);
  return (
    <div>
      <ul className={s.list}>
        {cast.map((item) => (
          <li key={item.id} className={s.listItem}>
            <img src={item.profile_path ? `https://image.tmdb.org/t/p/w500/${item.profile_path}` : defaultImg} alt={item.name} />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
