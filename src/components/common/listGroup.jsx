import { getGenres } from "../../services/fakeGenreService.js";
import React from "react";

const ListGroup = (props) => {
  const { currentGenre } = props;
  const genres = getGenres();

  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre._id}
          className={
            genre === currentGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => props.onGenreChange(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
