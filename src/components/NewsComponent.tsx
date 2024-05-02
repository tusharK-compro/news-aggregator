import { Paper, Typography } from '@mui/material';


import React from 'react';
interface NewsComponentProps {
    title: string;
    content: string;
  }
  
  
  const NewsComponent = (props:NewsComponentProps) => {
    const {title,content}=props;
  
    return (
        <div></div>
  
    );
  };
  
  export default NewsComponent;