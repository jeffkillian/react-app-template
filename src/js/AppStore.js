import React from "react"
import { observable, action, computed } from "mobx"
import axios from "axios"
export default class AppStore {
   
  @observable number = 10
  @observable randomNumber = ""
  
  @computed get isPositive (){
      return this.simpleVariable > 0
  }
  incrementValue = ()=>{
    this.changeNumber(this.number+1)
  }

  @action changeNumber = (newNumber)=>{
      this.number = newNumber
  }

  getRandomNumber = ()=>{
    axios.get("http://localhost:9001/randomNumber").then(this.setRandomNumber) 
  }

  @action setRandomNumber = (number)=>{
    this.randomNumber = number.data.number
  }
}