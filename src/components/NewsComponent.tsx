import { Paper, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

import React from 'react';
interface NewsComponentProps {
    title: string;
    content: string;
  }
  
  const useStyles = makeStyles(() =>
    createStyles({
        root: {
          padding: '16px',
          marginBottom: '16px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          borderRadius: 8,
          maxWidth:300,
          backgroundColor: '#fff',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
          },
        },
        title: {
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: '8px',
        },
        content: {
          fontSize: 16,
        },
      })
  );
  
  const NewsComponent = (props:NewsComponentProps) => {
    const classes = useStyles();
    const {title,content}=props;
  
    return (
        <Paper className={classes.root}>
        <Typography className={classes.title} variant="h6" component="h2">
          {title}
        </Typography>
        <Typography className={classes.content} color="textSecondary" component="p">
          {content}
        </Typography>
      </Paper>
  
    );
  };
  
  export default NewsComponent;