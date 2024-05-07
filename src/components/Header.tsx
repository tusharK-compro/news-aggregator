import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { NewsSearch } from "../services/NewsService";

interface HeaderProps {
  setData: any;
  setSearch: any;
}
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "200px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "400px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header(props: HeaderProps) {
  const { setData, setSearch } = props;

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      setData([]);
      setSearch(true);
      let query: String = event.target.value;
      if (query.length > 0) {
        NewsSearch(query).then((res) => {
          setData(res);
        });
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            NEWS AGGREGATOR
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            NA
          </Typography>
          <Search>
            <SearchIconWrapper>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </SearchIconWrapper>
            <StyledInputBase onKeyDown={handleKeyPress} placeholder="Search…" />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
