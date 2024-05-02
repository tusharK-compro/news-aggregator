import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { styled } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';


const NewsCard = styled(Card)(()=>({
    width:'100%',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    marginBottom:'20px',

}))

const StyledCardContent= styled(CardContent)(()=>({
    textAlign:'end',
    paddingBottom:'8px!important'
}))

export default function NewsComponent() {
  return (
    <NewsCard >
        <StyledCardContent >
          <Typography textAlign='left' variant="h5" component="div">
            Notorious gangster Goldy Brar is alive: US cops
          </Typography>
          <Typography marginTop={1} textAlign='left' variant="body2" color="text.secondary">
            Goldy Brar, the notorious gangster based in Canada, is alive, contrary to reports of his death in a shooting incident that happened in California that circulated on Tuesday, the United States cops confirmed.
            The Fresno police department has now responded to the reports, saying that they are "untrue". 
            In response to a query, Lieutenant William J Dooley said, "If you are inquiring because of the online chatter claiming that the shooting victim is 'Goldy Brar', we can confirm that this is absolutely not true."
          </Typography>
          <Button
            sx={{textAlign:'right', textTransform:'none'}}
            component="a"
            href=''
            target="_blank"
            endIcon={<LaunchIcon />}
            >
            See full article
            </Button>
        </StyledCardContent>
    </NewsCard>
  );
}