import TheGuardianAdService from './services/TheGuardianAdService';
import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import { Box, Button, CircularProgress, Typography, styled } from '@mui/material';
import NewsComponent from './components/NewsComponent';
import FilterDialog from './components/FilterDialog';
import {NYEverything, NYSearch} from './services/NYTAdService';
import { NewsAPIEverything } from './services/NewsAPIAdService';
import {NewsService} from './services/NewsService';
const StyledFeed= styled('div')(({theme})=>({
    padding:'20px',

    [theme.breakpoints.up('sm')]: {
        padding:'20px 50px'
        
      },
}))

const StyledHeadComponent=styled('div')(()=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20
}))



function Home() {
        const [data, setData] = useState(Array);
        const fetchInfo = useCallback(async () => {
            const res = await NewsService('everything');
            setData( res );
          }, []);
          
          useEffect(() => {
            fetchInfo();
          }, [fetchInfo]);
        console.log(data)

    return (<>
            <Header/>
            <StyledFeed>
            <StyledHeadComponent>
            <Typography marginBottom={1} marginLeft={1} textAlign='left' variant='h5' component='div'>News feed</Typography>
            {/* <StyledFilterButton
                variant="text"
                color="primary"
                startIcon={<TuneOutlinedIcon />}
                >
                Preferences
                </StyledFilterButton> */}
                <FilterDialog/>
            </StyledHeadComponent>
            {data.length > 0 ? (data.map((news:any)=>{

                return <NewsComponent title={news.title} desc={news.description} extLink={news.webUrl}/>
            })):  <Box sx={{ height:'100vh', py:22}}>
      <CircularProgress />
    </Box>}

            

            </StyledFeed>
                
        </>
    );
}

export default Home;