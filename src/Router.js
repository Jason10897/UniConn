import { Router } from '@reach/router';
import React from 'react';
import BreadCrumb from './components/AppFrame/Breadcrumb';
import HomePage from './components/AppFrame/HomePage';
import Chatbox from './components/chatbox/Chatbox';
import UserProfile from './components/profile/UserProfile';
import RoadMap from './components/roadmap/Roadmap';
import Alumnisearch from './components/search/AlumniSearch';


function WithBreadCrumb(props){
  return (
    <React.Fragment>
      <BreadCrumb/>
      {props.children}
    </React.Fragment>
  )
}


export default function MyRouter(){

    return (
       <Router>
        <HomePage  path="/"/>
        <WithBreadCrumb path="/search"><Alumnisearch path="*"/></WithBreadCrumb>
        <WithBreadCrumb path="/profile/:id"><UserProfile path="*" /></WithBreadCrumb>
        <WithBreadCrumb path="/roadmap"><RoadMap path="*"/></WithBreadCrumb>
        <Chatbox path="/chatbox"/>
      </Router>
    )
}