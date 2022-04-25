import React from 'react';
import Typography from '@mui/material/Typography';

export default function Details(params) {
    return (
        <>

            <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'left', fontWeight: 'bold' }}>
                {params.title}
            </Typography>
            
            <Typography variant="body1" gutterBottom component="div" sx={{ textAlign: 'justify', marginBottom: 3 }}>
                {titleDetails(params.title)}
            </Typography>

        </>
    )
}
// For future implementation: data from the details will be returned for printing on the profile page

function titleDetails(title) {
    let loremContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim est quasi dignissimos sint reiciendis veniam ullam non exercitationem praesentium qui, earum nam nihil doloremque ut eum, repellat, voluptatibus in reprehenderit. Vel molestiae repellendus ipsam nostrum dolor eos accusamus optio est atque velit quod pariatur quas rem quisquam, exercitationem consectetur sint.";
    switch (title) {
        case 'About':
            return loremContent;
            break;
        case 'Work Experience':
            return loremContent;
            break;
        case 'Education':
            return loremContent;
            break;
        case 'Projects':
            return loremContent;
            break;

    }
}

