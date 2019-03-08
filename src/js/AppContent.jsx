

import React from "react"
import { observer } from "mobx-react"

@observer
class AppContent extends React.Component {

  constructor(options){
    super()
    // this.state = {
    //  value:4
    // }
  }

  render(){
    return (
      <div className="title">
       Hello I have a value of {this.props.store.number}
        <div class="row">
        <div class="col-sm-4">hello</div>
        <div class="col-sm-4">there</div>
        <div class="col-sm-4">world</div>
      </div>
      </div>
    )
  }
  
}

export default AppContent