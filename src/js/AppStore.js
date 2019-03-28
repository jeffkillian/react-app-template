import React from "react"
import { observable, action, computed } from "mobx"
import axios from "axios"
import Api from "./api.js"
export default class AppStore {
   
  @observable retrievedMovie = {}
  @observable allMovies = []
  @observable movieIdInQuestion = "2"
  constructor(){
    this.api = new Api()
  }

  getMovies = ()=>{
    let sortOrder = "desc"
    if (this.movieIdInQuestion>3) sortOrder = "asc"
   this.api.getMovies(sortOrder).then(this.handleMoviesResponse)
  }

  getCrimeRates = () => {
    this.api.getCrimeRates().then(response => {
      console.log(response)
    })
  }

  // get
  getMovie = () => {
    this.api.getMovie(this.movieIdInQuestion).then(this.handleRetrievedMovie)
  
  }

  // post
  addMovie = () => {
    let movieData = {
      title: "Pirates of the Caribbean",
      releasedate:"2003-06-23",
      length:123,
      rating: 2.4
    }
    this.api.addMovie(movieData).then(response => {
      console.log(response)
    })
  }

  // put
  modifyRating = () => {
    let movieData = {
      id: this.movieIdInQuestion,
      rating: Math.random() * 10
    }
    this.api.editRating(movieData).then(response => {
      console.log(response)
    })
  }

  // delete
  deleteMovie = () => {
    this.api.deleteMovie(this.movieIdInQuestion).then(response => {
      console.log(response)
    })
    
  }

  @action changeMovieVal = (e)=>{
    this.movieIdInQuestion = e.target.value
  }

  @action handleMoviesResponse = (response) => {
    this.allMovies = response.data.movies
  }

  @action handleRetrievedMovie = (response) => {
    this.retrievedMovie = response.data.movie
  }

}