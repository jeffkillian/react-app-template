import React from "react"
import { observable, action, computed } from "mobx"
export default class AppStore {
   
    @observable number = 10

    constructor(){

    }
    
    @computed get isPositive (){
        return this.simpleVariable > 0
    }

    @action changeNumber(newNumber){
        this.number = newNumber
    }
}