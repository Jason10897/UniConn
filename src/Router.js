import { Router } from '@reach/router';
import React from 'react';
import BreadCrumb from './components/AppFrame/Breadcrumb';
import HomePage from './components/AppFrame/HomePage';
import Chatbox from './components/chatbox/Chatbox';
import Documentation from './components/documentation/Documentation';
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


export default function MyRouter({setActive}){

    return (
       <Router>
        <HomePage  path="/" setActive={setActive}/>
        <WithBreadCrumb path="/search"><Alumnisearch path="*" setActive={setActive}/></WithBreadCrumb>
        <WithBreadCrumb path="/profile/:id"><UserProfile path="*" setActive={setActive}/></WithBreadCrumb>
        <WithBreadCrumb path="/roadmap"><RoadMap path="*" setActive={setActive}/></WithBreadCrumb>
        <Chatbox path="/chatbox" setActive={setActive}/>
        <Documentation path='/documentation' setActive={setActive}/>
      </Router>
    )
}