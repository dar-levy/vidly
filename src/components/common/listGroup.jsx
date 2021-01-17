import React from "react";

const ListGroup = (props) => {
  const { genres, textProperty, valueProperty, currentGenre } = props;

  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          className={
            genre[textProperty] === currentGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => props.onGenreChange(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
