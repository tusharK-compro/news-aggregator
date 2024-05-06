import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { styled } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

interface NewsComponentProps{
  title : string,
  desc : string,
  extLink?:string

}

const NewsCard = styled(Card)(()=>({
    width:'100%',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    marginBottom:'20px',

}))

const StyledCardContent= styled(CardContent)(()=>({
    textAlign:'end',
    paddingBottom:'8px!important'
}))

export default function NewsComponent(props:NewsComponentProps) {
  const {title,desc,extLink}=props;
  return (
    <NewsCard >
        <StyledCardContent >
          <Typography textAlign='left' variant="h5" component="div">
            {title}
          </Typography>
          <Typography marginTop={1} textAlign='left' variant="body2" color="text.secondary">
            {desc}
          </Typography>
          <Button
            sx={{textAlign:'right', textTransform:'none'}}
            component="a"
            href={extLink}
            target="_blank"
            endIcon={<LaunchIcon />}
            >
            See full article
            </Button>
        </StyledCardContent>
    </NewsCard>
  );
}