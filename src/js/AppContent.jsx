

import React from "react"
import { observer } from "mobx-react"

@observer
class AppContent extends React.Component {

  constructor(options){
    super(options)
    // this.state = {
    //  value:4
    // }
  }

  render(){
    return (
      <div >
       <div className="title">Hello world</div>
        <div className="row">
        <div className="col-sm-4">
          <button type="button" className=" m-2 btn btn-primary" onClick={this.props.store.incrementValue}>Increment Value</button>
          </div>
        <div className="col-sm-4">I have a value of {this.props.store.number}</div>
        <div className="col-sm-4">
          <button type="button" className=" m-2 btn btn-primary" onClick={this.props.store.getRandomNumber}>Get random number from server</button>
          The last random number was: {this.props.store.randomNumber}
        </div>
      </div>
      </div>
    )
  }
  
}

export default AppContent