import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export const SearchBar = ({setSearchQuery}) => (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Search Repositories"
        variant="outlined"
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "black" }} />
      </IconButton>
    </form>
  );