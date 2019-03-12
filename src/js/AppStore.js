import React from "react"
import { observable, action, computed } from "mobx"
import axios from "axios"

//Disallow invalid characters
//Formatting characters are only inserted preceding digits
//Deleting a digit also removes any immediately preceding formatting characters
//Pasting a full/partial number into the input should work
export default class AppStore {
   
  @observable inputNumber
  constructor(){
    this.inputNumber = ""

  }

  // have some rules in here to make it appear right
  @computed get displayedNumber(){
    let displayedNumber = this.inputNumber
    let firstThreeChars = this.inputNumber.substring(0,3)
    if (this.inputNumber.length>0) displayedNumber = `(${firstThreeChars}`
    if (this.inputNumber.length>3) {
      displayedNumber = `${displayedNumber})`
      let middleSection = this.inputNumber.substring(3,6)
      // at this point displayedNumber is (888) 
      displayedNumber = `${displayedNumber} ${middleSection}`
      // if we have a inputnumberlength of at least 7, add in the dash
      if (this.inputNumber.length > 6) {
        // let's add in a dash
        displayedNumber = `${displayedNumber}-`
        // get the substring of the last characters

        // add them on to the end
        let endingChars = this.inputNumber.substring(6,10)
        displayedNumber = `${displayedNumber}${endingChars}`
      }
    }
    
    return displayedNumber
    


  }

   @action onChange = (e) =>{
     let newVal = e.target.value
      // filter out all non numeric
    this.inputNumber =  newVal.replace(/\D/g,'');
  }


  // @observable number = 10
  // @observable randomNumber = ""
  
  // @computed get isPositive (){
  //     return this.simpleVariable > 0
  // }
  // incrementValue = ()=>{
  //   this.changeNumber(this.number+1)
  // }

  // @action changeNumber = (newNumber)=>{
  //     this.number = newNumber
  // }

  // getRandomNumber = ()=>{
  //   axios.get("http://localhost:9001/randomNumber").then(this.setRandomNumber) 
  // }

  // @action setRandomNumber = (number)=>{
  //   this.randomNumber = number.data.number
  // }
}