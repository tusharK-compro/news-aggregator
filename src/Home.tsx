import TheGuardianAdService from './services/TheGuardianAdService';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import { Button, Typography, styled } from '@mui/material';
import NewsComponent from './components/NewsComponent';
import FilterDialog from './components/FilterDialog';
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

const StyledFilterButton=styled(Button)(()=>({
    textTransform:'none',
}))

function Home() {
        const [data, setData] = useState(Array);
        useEffect(()=>{
            setData(TheGuardianAdService({},false));
            console.log(data);
        },[])
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
            

            <NewsComponent />
            <NewsComponent />
            <NewsComponent />
            <NewsComponent />

            </StyledFeed>
                
        </>
    );
}

export default Home;