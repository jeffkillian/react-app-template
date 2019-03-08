

import React from "react"

class AppContent extends React.Component {

  constructor(options){
    this.state = {
     value:4
    }
  }

  render(){
    return (
      <div>
        Hello world I another thing am an app with a value of {this.state.value}
      </div>
    )
  }
  
}

export default AppContent