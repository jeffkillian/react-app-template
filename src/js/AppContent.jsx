

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
    let store = this.props.store
    return (
      <div className="ml-2">
        <div>Phone Number:  </div>
        <input value={store.displayedNumber} onChange={store.onChange}></input>
      </div>
    )
  }
  
}

export default AppContent