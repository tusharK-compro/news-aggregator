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
  const handleLoadMore = () => {
    setPage(page + 1);
    NewsSearch("run", {}, true, page).then((res) => {
      setData((prev: any) => [...prev, ...res]);
    });
  };
  const [data, setData] = useState<any>();
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    NewsServiceEverything().then((res) => {
      setData(res);
    });
  }, [search]);

  const handleBack = () => {
    setSearch(false);
  };

  return (
    <>
      <Header setSearch={setSearch} setData={setData} />
      <StyledFeed>
        <StyledHeadComponent>
          <Typography
            textAlign="left"
            variant="h5"
            component="div"
            sx={{ margin: { xs: "0", sm: "0 0 8px" } }}
          >
            News feed
          </Typography>

          <FilterDialog setData={setData} />
        </StyledHeadComponent>
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
        {search && (
          <Typography
            textAlign="left"
            variant="h5"
            component="div"
            sx={{ margin: { xs: "0", sm: "0 0 8px" } }}
          >
            Search results
          </Typography>
        )}
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
