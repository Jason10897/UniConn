import { Router } from "@reach/router"
import React from "react"
import HomePage from './components/AppFrame/HomePage'
import Alumnisearch from "./components/search/AlumniSearch"



export default function MyRouter(){
    return (
       <Router>
        <HomePage path="/" />
        <Alumnisearch path="/search" />
      </Router>
    )
}