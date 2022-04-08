import { Router } from "@reach/router"
import React from "react"
import HomePage from './components/AppFrame/HomePage'
import UserProfile from "./components/profile/UserProfile"
import RoadMap from "./components/roadmap/Roadmap"
import Alumnisearch from "./components/search/AlumniSearch"



export default function MyRouter(){
    return (
       <Router>
        <HomePage path="/" />
        <Alumnisearch path="/search" />
        <UserProfile path="/profile" />
        <RoadMap path="/roadmap"/>
      </Router>
    )
}