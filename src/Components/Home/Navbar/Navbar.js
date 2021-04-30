import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "./NavStyle.css";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },

  inputRoot: {
    color: "red",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    paddingLeft: "40px",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    margin: 2,
  },
  drawer: {
    flexShrink: 0,
  },
}));

export default function Navbar({ home, about, admission, contact, courses }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div class="BigDiv">
      <AppBar
        style={{
          display: "flex",
          backgroundColor: "white",
          boxShadow: "0 0 0",
          justifyContent: "space-between !important",
        }}
        position="fixed"
      >
        <Toolbar className="Tool-Bar">
          <div className="link-bar">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="#fff"
              aria-label="open drawer"
            >
              <img src="./images/logonav.jpg" alt="Logo" />
            </IconButton>

            <Typography variant="h6" noWrap>
              <div className={classes.sectionDesktop}>
                <Link className="LinkBar" to="/" class={home}>
                  Home
                </Link>
                <Link className="LinkBar" to="/about" class={about}>
                  About Us
                </Link>
                <Link className="LinkBar" to="/admission" class={admission}>
                  Admission
                </Link>
                <Link className="LinkBar" to="/courses" class={courses}>
                  Courses
                </Link>
                <Link className="LinkBar" to="/contact" class={contact}>
                  Contact
                </Link>
              </div>
            </Typography>
          </div>

          <div className={classes.grow} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ padding: "2px", justifyContent: "space-between" }}>
              <IconButton class="NavIcon">
                <FacebookIcon />
              </IconButton>
              <IconButton class="NavIcon">
                <TwitterIcon />
              </IconButton>
              <IconButton class="NavIcon">
                <LinkedInIcon />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleDrawerOpen}
                class="NavIcon"
              >
                <MenuIcon />
              </IconButton>
              <div style={{}}>
                <Drawer
                  className={classes.drawer}
                  variant="persistent"
                  anchor="right"
                  open={open}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  style={{ margin: "2px" }}
                >
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton onClick={handleDrawerClose}>
                      <CloseIcon />
                    </IconButton>
                  </div>
                  <div
                    style={{
                      width: "200px",

                      overflow: "auto",
                      display: "flex",
                    }}
                  >
                    <List>
                      <ListItem>
                        <Link class="LinkBar" to="/">
                          Home
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link class="LinkBar" to="/about">
                          About Us
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link class="LinkBar" to="/admission">
                          Admission
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link class="LinkBar" to="/courses">
                          Courses
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link class="LinkBar" to="/contact">
                          Contact
                        </Link>
                      </ListItem>
                    </List>
                  </div>
                </Drawer>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </div>
  );
}
