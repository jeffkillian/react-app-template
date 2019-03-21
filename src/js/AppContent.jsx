

import React from "react"
import { observer } from "mobx-react"

@observer
class AppContent extends React.Component {

  constructor(options){
    super(options)
  }

  render(){
    return (
      <div >
        <div className="title">Hello world</div>
        <div className="mt-2" >
         Movie ID we will do something to: <input value = {this.props.store.movieIdInQuestion} onChange={this.props.store.changeMovieVal} />
        </div>
        <div className="row">
         
          <div className="col-sm-6">
            
            <button type="button" className=" m-2 btn btn-primary" onClick={this.props.store.getMovie}>Get Movie</button>
            
            The last movie you got was: {this.props.store.retrievedMovie.title}
          </div>
          <div className="col-sm-6">
            <button type="button" className=" m-2 btn btn-primary" onClick={this.props.store.addMovie}>Add a new movie</button>
          </div>
        </div>
        <div className= "row">

          <div className="col-sm-3">
            <button type="button" className=" m-2 btn btn-primary" onClick={this.props.store.modifyRating}>Modify Movie Rating</button>
          </div>
          <div className="col-sm-6">
            <button type="button" className=" m-2 btn btn-primary" onClick={this.props.store.getMovies}>Get Movies</button>
            {this.props.store.allMovies.map((movie, index) => {
              return <Movie movie={movie} key={index}  />
            })}
          </div>
        </div>
        <div className= "row">
          <div className="col-sm-3">
            <button type="button" className=" m-2 btn btn-primary" onClick={this.props.store.deleteMovie}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
  
}


class Movie extends React.Component {

  render(){
    let movie = this.props.movie
    let title = movie.title
    let year = movie.releasedate.substring(0,4)
    let rating = movie.rating
    let runtime = movie.length
    let id = movie.id
    return (
      <div>{id}. {title}({year}) - Rating: {rating}. Runtime: {runtime}</div>
      )
  }
  
}

export default AppContent