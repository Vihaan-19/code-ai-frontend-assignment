import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Select,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Stack,
  Chip,
  useMediaQuery,
} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from "@mui/material/styles";
import FormControl from '@mui/material/FormControl';
import MenuIcon from "@mui/icons-material/Menu";
import CachedSharpIcon from '@mui/icons-material/CachedSharp';
import AddIcon from "@mui/icons-material/Add";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CodeIcon from '@mui/icons-material/Code';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import { SearchBar } from "../components/SearchBar";

const repositories = [
  { name: "analytics-dashboard", language: "Python", size: "4521 KB", visibility: "Private", updated: "5 days ago" },
  { name: "mobile-app", language: "Swift", size: "3096 KB", visibility: "Public", updated: "3 days ago" },
  { name: "e-commerce-platform", language: "Java", size: "6210 KB", visibility: "Private", updated: "6 days ago" },
  { name: "blog-website", language: "HTML/CSS", size: "1876 KB", visibility: "Public", updated: "4 days ago" },
  { name: "social-network", language: "PHP", size: "5432 KB", visibility: "Private", updated: "7 days ago" },
];

const menuItems = [
  { name: "Repositories", icon:HomeOutlinedIcon },
  { name: "AI Code Review", icon:CodeIcon },
  { name: "Cloud Security", icon:CloudQueueIcon },
  { name: "How to Use", icon:LibraryBooksOutlinedIcon },
  { name: "Settings", icon:SettingsOutlinedIcon },
  { name: "Support", icon:CallOutlinedIcon },
  { name: "Logout", icon:LogoutIcon },
];

export const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [age, setAge] = useState("");
  
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect screen size for mobile
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

  return (
    <Box sx={{ p:2, display: "flex", height: "100vh", bgcolor:"#E5E4E2" }}>
         {/* Render AppBar only for mobile */}
         {isMobile && (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              CodeAnt AI
            </Typography>
            <IconButton color="inherit" edge="start" onClick={toggleMenu} sx={{ display: { xs: "block", md: "none" } }}>
              {menuOpen ? <ClearRoundedIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

    {/* Dropdown Menu (Mobile Only) */}
      {menuOpen && isMobile && (
                <Box
                sx={{
                  position: "absolute",
                  top: (theme) => theme.mixins.toolbar.minHeight || 56,
                  left: 0,
                  right: 0,
                  bgcolor: "white",
                  zIndex: 1300,
                  boxShadow: 3,
                }}
              >
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      )}

<Drawer
  variant="permanent"
  sx={{
    width: 240,
    flexShrink: 0,
    display: { xs: "none", md: "block" },
    "& .MuiDrawer-paper": { width: 240, top: 0 },
  }}
>
  <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
    {/* Title */}
    <Box sx={{ flexGrow: 0, p: 3 }}>
      <Typography variant="h6">CodeAnt AI</Typography>
    </Box>

    {/* Dropdown */}
    <Box sx={{ flexGrow: 0, p: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>

    {/* Menu Items */}
    <Box sx={{ flexGrow: 1 }}>
      <List>
        {menuItems.slice(0, 5).map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>

    <Divider />

    {/* Footer Buttons */}
    <Box sx={{ mt: "auto" }}>
      <List>
        {menuItems.slice(5).map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  </Box>
</Drawer>


      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 2, mt: 0, borderRadius: 2, bgcolor:"white",overflow: "auto"}}>
      {/* Header Section */}
      <Box my={3}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          spacing={2}
        >
          {/* Title and Count */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              Repositories
            </Typography>
            <Typography variant="body2" color="text.secondary">
              33 total repositories
            </Typography>
            <SearchBar></SearchBar>
          </Box>

          {/* Buttons */}
          <Stack direction="row" spacing={1} alignItems="center">
          <Button variant="outlined" color="grey" startIcon={<CachedSharpIcon />} sx={{ textTransform: "none" }}>
              Refresh All
            </Button>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ textTransform: "none" }}
            >
              Add Repository
            </Button>
          </Stack>
        </Stack>
      </Box>

        {/* Repository List */}
        <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto", 
              maxHeight: "calc(100vh - 200px)", 
            }}
          >
            <Stack spacing={0}>
              {repositories.map((repo, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                    border: "1px solid #ddd",
                    borderRadius: 2,
                    bgcolor: "white",
                    boxShadow: 1,
                    "&:hover": {
                      boxShadow: 3,
                      backgroundColor: "#f9f9f9",
                    },
                    transition: "box-shadow 0.2s ease, background-color 0.2s ease",
                  }}
                >
                  {/* Repository Name and Details */}
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5, color: "text.primary" }}>
                      {repo.name}
                    </Typography>
                    <Chip
                      label={repo.visibility}
                      size="small"
                      sx={{
                        backgroundColor: repo.visibility === "Private" ? "#e3f2fd" : "#f1f8e9",
                        color: repo.visibility === "Private" ? "#1976d2" : "#388e3c",
                        fontWeight: "bold",
                        mb: 1,
                        borderRadius: 1,
                        paddingX: 1,
                        fontSize: 12,
                      }}
                    />
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography variant="body2" color="text.secondary">
                        {repo.language}
                      </Typography>
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: "blue",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ mx: 1, color: "text.secondary" }}
                      >
                        <img src="../../assets/database.png" width="18px" height="18px" alt="Database icon" />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {repo.size}
                      </Typography>
                      <Typography variant="body2" sx={{ mx: 1, color: "text.secondary" }}>
                        •
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Updated {repo.updated}
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
