import { useEffect, useState } from "react";
import Header from "./components/Header";
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  styled,
} from "@mui/material";
import NewsComponent from "./components/NewsComponent";
import FilterDialog from "./components/FilterDialog";
import { NewsSearch, NewsServiceEverything } from "./services/NewsService";
import dayjs, { Dayjs } from "dayjs";
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
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState(false);
  const [keyword, setKeyword] = useState();
  const [preferences, setPreferences] = useState({
    sources: [],
    categories: [],
    authors: [],
  });
  const [date, setDate] = useState<Dayjs>(dayjs("2022-04-17"));
  
  const handleLoadMore = () => {
    setPage(page + 1);
    let category =
    preferences.categories?.length > 0 ? preferences.categories : undefined;
  let sources =
    preferences.sources?.length > 0 ? preferences.sources : undefined;
  
  let newsDate = date.year() + "-" + date.month() + "-" + date.date();
    if(search){
      NewsSearch(keyword, { category, sources, date:newsDate }, true, page).then((res) => {
        setData((prev: any) => [...prev, ...res]);
      });
    }
    else{
    NewsServiceEverything(preferences,true,page).then(
      (res) => {
        setData(res);
      }
    );
    }
  };
  useEffect(() => {
   if(!search)
    NewsServiceEverything().then((res) => {
      setData(res);
    });
  }, [search]);

  const handleBack = () => {
    setSearch(false);
  };

  return (
    <>
      <Header setKeywords={setKeyword} setSearch={setSearch} setData={setData} />
      <StyledFeed>
        
        <Box display="flex" alignItems="flex-start">
          {search && (
            <Button
              onClick={handleBack}
              variant="text"
              sx={{ marginLeft: "-10px" }}
            >
              Back
            </Button>
          )}
        </Box>
        {search ? 
         (<StyledHeadComponent>

          <Typography
            textAlign="left"
            variant="h5"
            component="div"
            sx={{ margin: { xs: "0", sm: "0 0 8px" } }}
          >
            Search results
          </Typography>
        <FilterDialog filter preference={preferences} keywords={keyword} setPreference={setPreferences} date={date} setDate={setDate} setData={setData} />

          </StyledHeadComponent>
        ): <StyledHeadComponent>
        <Typography
          textAlign="left"
          variant="h5"
          component="div"
          sx={{ margin: { xs: "0", sm: "0 0 8px" } }}
        >
          News feed
        </Typography>

        <FilterDialog preference={preferences} setPreference={setPreferences} date={date} setDate={setDate} setData={setData} />
      </StyledHeadComponent>}
        {data && data.length > 1 ? (
          <>
            {data.map((news: any) => {
              return (
                <NewsComponent
                  title={news.title}
                  desc={news.description}
                  extLink={news.webUrl}
                />
              );
            })}
            <Button onClick={handleLoadMore}>Load More</Button>
          </>
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
