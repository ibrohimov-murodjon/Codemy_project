import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
// import Menu from "@material-ui/core/Menu";
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

  const [open1, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     open={true}
  //     anchorEl={()=><div>153</div>}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //   ></Menu>
  // );

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className="BigDiv">
      <AppBar
        style={{
          display: "flex",
          backgroundColor: "white",
          justifyContent: "center",
          boxShadow: "0 -7px 13px #888",
        }}
        position="fixed"
      >
        <Toolbar className="Tool-Bar">
          <div className="link-bar">
            <div style={{ paddingTop: "17px" }} disabled="folse">
              <Link to="/">
                <img src="./images/logonav.jpg" alt="Logo" />
              </Link>
            </div>

            <Typography variant="h6" noWrap>
              <div className={classes.sectionDesktop}>
<<<<<<< HEAD
                <Link className={`Nactive ${home}`}  to="/" >
                  <p className="navFontST">Home</p>
                </Link>
                <Link className={`LinkBar ${about}`}  to="/about" >
                  <p className="navFontST"> About Us</p>
                </Link>
                <Link className={`LinkBar ${admission}`}  to="/admission" >
                  <p className="navFontST"> Admission</p>
                </Link>
                <Link className={`LinkBar ${courses}`} to="/courses" >
                  <p className="navFontST"> Courses</p>
                </Link>
                <Link className={`LinkBar ${contact}`} to="/contact" >
=======
                <Link className="Nactive" to="/" id={home}>
                  <p className="navFontST">Home</p>
                </Link>
                <Link className="LinkBar" to="/about" id={about}>
                  <p className="navFontST"> About Us</p>
                </Link>
                <Link className="LinkBar" to="/admission" id={admission}>
                  <p className="navFontST"> Admission</p>
                </Link>
                <Link className="LinkBar" to="/courses" id={courses}>
                  <p className="navFontST"> Courses</p>
                </Link>
                <Link className="LinkBar" to="/contact" id={contact}>
>>>>>>> 6ca8e9d28c19ded5c3a01326da6491c0d2644a52
                  <p className="navFontST"> Contact</p>
                </Link>
              </div>
            </Typography>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div className="barDivmarg">
                <IconButton className="NavIcon">
                  <FacebookIcon />
                </IconButton>
                <IconButton className="NavIcon">
                  <TwitterIcon />
                </IconButton>
                <IconButton className="NavIcon">
                  <LinkedInIcon />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleDrawerOpen}
                  className="NavIcon"
                >
                  <MenuIcon />
                </IconButton>
                <div style={{}}>
                  <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open1}
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    style={{ margin: "2px" }}
                  >
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
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
                          <Link className="LinkBar" to="/">
                            Home
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link className="LinkBar" to="/about">
                            About Us
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link className="LinkBar" to="/admission">
                            Admission
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link className="LinkBar" to="/courses">
                            Courses
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link className="LinkBar" to="/contact">
                            Contact
                          </Link>
                        </ListItem>
                      </List>
                    </div>
                  </Drawer>
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {/* {renderMenu} */}
    </div>
  );
}
