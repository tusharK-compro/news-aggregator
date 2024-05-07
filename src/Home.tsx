import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import {
  Box,
  CircularProgress,
  Typography,
  styled,
} from "@mui/material";
import NewsComponent from "./components/NewsComponent";
import FilterDialog from "./components/FilterDialog";
import { NewsServiceEverything } from "./services/NewsService";
const StyledFeed = styled("div")(({ theme }) => ({
  padding: "20px",

  [theme.breakpoints.up("sm")]: {
    padding: "20px 50px",
  },
}));

const StyledHeadComponent = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 20,
}));

function Home() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    NewsServiceEverything("everything").then((res) => {
      setData(res);
    });
  }, []);
  console.log("data ", data);

  return (
    <>
      <Header />
      <StyledFeed>
        <StyledHeadComponent>
          <Typography
  
            textAlign="left"
            variant="h5"
            component="div"
            sx={{  margin: { xs: '0', sm: '0 0 8px' } }}
          >
            News feed
          </Typography>
          {/* <StyledFilterButton
                variant="text"
                color="primary"
                startIcon={<TuneOutlinedIcon />}
                >
                Preferences
                </StyledFilterButton> */}
          <FilterDialog />
        </StyledHeadComponent>
        {data && data.length > 1 ? (
          data.map((news: any) => {
            return (
              <NewsComponent
                title={news.title}
                desc={news.description}
                extLink={news.webUrl}
              />
            );
          })
        ) : (
          <Box sx={{ height: "100vh", py: 22 }}>
            <CircularProgress />
          </Box>
        )}
      </StyledFeed>
    </>
  );
}

export default Home;
