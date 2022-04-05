import { Router } from "@reach/router"
import React from "react"
import HomePage from './components/AppFrame/HomePage'



export default function MyRouter(){
    return (
       <Router>
        <HomePage path="/" />
      </Router>
    )
}