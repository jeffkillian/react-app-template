import axios from "axios"

export default class Api {

  constructor(){
    this.prefix = "http://localhost:9001"
  }
  getMovies = (sortOrd) => {
    return axios.get(`${this.prefix}/movies?sort=${sortOrd}`)
  }

  getMovie = (id) => {
    let getMovieUrl = `${this.prefix}/movies/${id}`
    return axios.get(getMovieUrl)
  }

  addMovie = (movieData) => {
    let postUrl = `${this.prefix}/movie`
    return axios.post(postUrl, movieData )
  }

  // edits rating by title
  editRating = ({id: movieId, rating: newRating}) => {
    let putUrl  = `${this.prefix}/movie/${movieId}`
    return axios.put(putUrl,{newRating})
  }

  deleteMovie = (movieId) => {
    let deleteUrl  = `${this.prefix}/movie/${movieId}`
    return axios.delete(deleteUrl)
  }



  
  


}