import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from '@reach/router';
import * as React from 'react';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
export default function BreadCrumb(){

    const location = useLocation()

    const locs = location.pathname.split('/').splice(1)
    console.log(locs)

    
    return (
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
              <Link style={{ textDecoration: 'none', color: 'inherit' }}  to='/'>home</Link>
            {
                locs.map((loc)=>
                    {
                        if(loc == 'search'){
                            return (
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} underline="hover" color="inherit" to={`/${loc}?filter=All`}>
                                    connect
                                </Link>
                            )
                        }else if( loc == 'profile'){
                            return (
                                <Typography style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Link style={{ textDecoration: 'none', color: 'inherit' }} underline="hover" color="inherit" to={`/search?filter=All`}>
                                    connect
                                </Link> / {loc}
                                </Typography>
                                
                            )
                        }else if(loc == 'roadmap'){
                            return (
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} underline="hover" color="inherit" to={`/${loc}`}>
                                    {loc}
                                </Link>
                            )
                        }else{
                            return (
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} underline="hover" color="inherit" to={`/profile/${loc}`}>
                                    {loc}
                                </Link>
                            )
                        }
                    }
                )
            }
          </Breadcrumbs>
        </div>
      );
}