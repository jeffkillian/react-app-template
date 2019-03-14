import React from "react"
import { observable, action, computed } from "mobx"
import axios from "axios"
export default class AppStore {
   
  @observable number = 10
  @observable randomNumber = ""
  @observable firstBookTitle
  
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

  // gets the first book title
  getBook = ()=>{
    axios.get("http://localhost:9001/book/0/title").then(this.setBookTitle) 
  }

  // change title of first book
  changeTitle =() => {
    let newTitle = Math.random().toString(36).substring(7);
    axios.patch("http://localhost:9001/book/0/title",{
      title: newTitle
    }).then(response => {
      
    })

  }

  @action setBookTitle = (response) => {
    this.firstBookTitle = response.data
  }

  @action setRandomNumber = (number)=>{
    this.randomNumber = number.data.number
  }


}