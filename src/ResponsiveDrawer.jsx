import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactsIcon from "@mui/icons-material/Contacts";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import SelectActionCard from "./components./Cards";
import LineChart from "./components./LineChart";
import PieChart from "./components./PieChart";
import AreaChart from "./components./AreaChart";
import BarChart from "./components./BarChart";
import { useState } from "react";
import AboutPage from "./pages/AboutPage";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [display, setDisplay] = useState({
    home: true,
    about: false,
    contact: false,
    settings: false,
    products: false,
    manualProducts: false,
    categories: false,
  });
  const handleDisplay = (text) => {
    if (text == "home") {
      setDisplay({
        home: true,
        about: false,
        contact: false,
        settings: false,
        products: false,
        manualProducts: false,
        categories: false,
      });
    } else if ((text = "about")) {
      setDisplay({
        home: false,
        about: true,
        contact: false,
        settings: false,
        products: false,
        manualProducts: false,
        categories: false,
      });
    } else if ((text = "contact")) {
      setDisplay({
        home: false,
        about: false,
        contact: true,
        settings: false,
        products: false,
        manualProducts: false,
        categories: false,
      });
    } else if ((text = "settings")) {
      setDisplay({
        home: false,
        about: false,
        contact: false,
        settings: true,
        products: false,
        manualProducts: false,
        categories: false,
      });
    } else if ((text = "products")) {
      setDisplay({
        home: false,
        about: false,
        contact: false,
        settings: false,
        products: true,
        manualProducts: false,
        categories: false,
      });
    } else if ((text = "manualProducts")) {
      setDisplay({
        home: false,
        about: false,
        contact: false,
        settings: false,
        products: false,
        manualProducts: true,
        categories: false,
      });
    } else if ((text = "categories")) {
      setDisplay({
        home: false,
        about: false,
        contact: false,
        settings: false,
        products: false,
        manualProducts: false,
        categories: true,
      });
    }
  };
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List
        onClick={() => {
          handleDisplay("home");
        }}
      >
        <Link to="/">
          <ListItem key={"0"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      {/* <Divider /> */}
      <List
        onClick={() => {
          handleDisplay("about");
        }}
      >
        <Link to="/About">
          <ListItem key={"3"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <List
        onClick={() => {
          handleDisplay("contact");
        }}
      >
        <Link to="/Contact">
          <ListItem key={"1"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <ContactsIcon />
              </ListItemIcon>
              <ListItemText primary={"Contact"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <List
        onClick={() => {
          handleDisplay("settings");
        }}
      >
        <Link to="/Settings">
          <ListItem key={"2"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"Settings"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Link to="/Products">
        <List
          onClick={() => {
            handleDisplay("products");
          }}
        >
          <ListItem key={"4"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <ShoppingCartIcon />
              </ListItemIcon>

              <ListItemText primary={"Products"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      <Link to="/ManualProducts">
        <List
          onClick={() => {
            handleDisplay("manualProducts");
          }}
        >
          <ListItem key={"5"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <ShoppingCartIcon />
              </ListItemIcon>

              <ListItemText primary={"ManualProducts"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      <Link to="/Categories">
        <List
          onClick={() => {
            handleDisplay("categories");
          }}
        >
          <ListItem key={"6"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <ShoppingCartIcon />
              </ListItemIcon>

              <ListItemText primary={"Categories"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        sx={{
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          // ml: { sm: `${drawerWidth}px` },
          zIndex: (theme) => theme.zIndex.drawer + 1, // Ensures AppBar is above the drawer
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xl: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth } }}
        aria-label="mailbox folders"
      >
        {/* flexShrink: { lg: 0 } */}
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xl: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", xl: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* {display.home && (
        <div className="flex flex-col gap-10 items-center px-10 mt-28">
          <SelectActionCard />
          <div className="flex xl:flex-row flex-col items-center gap-10 ">
            <LineChart />
            <PieChart />
          </div>
          <div className="flex xl:flex-row flex-col items-center gap-10">
            <AreaChart />
            <BarChart />
          </div>
        </div>
      )}
      {display.about&&<AboutPage/>} */}
      
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
