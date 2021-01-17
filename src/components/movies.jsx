import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination.jsx";
import { paginate } from "../utils/paginate.js";
import MoviesTable from "./moviesTable.jsx";
import ListGroup from "./common/listGroup";
import React, { Component } from "react";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: "All Genres",
  };

  componentDidMount() {
    const genres = [
      { _id: "5b21ca3eeb7f6fbccd49087", name: "All Genres" },
      ...getGenres(),
    ];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = (genre) => {
    let movies = getMovies();
    if (genre.name !== "All Genres") {
      movies = movies.filter((movie) => movie.genre.name === genre.name);
    }
    this.setState({ movies, currentGenre: genre.name, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      genres,
      pageSize,
      currentPage,
      movies: allMovies,
      currentGenre,
    } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            genres={genres}
            onGenreChange={this.handleGenreChange}
            currentGenre={currentGenre}
          />
        </div>
        <div className="col">
          <p>Showing {count} movies in the database.</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            totalCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
