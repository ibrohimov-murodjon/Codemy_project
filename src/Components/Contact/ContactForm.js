import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import { TextareaAutosize } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./ContactStyle.css";

const theme = createMuiTheme({
  palette: {
    primary: { main: green[100] },
  },
});

const theme2 = createMuiTheme({
  palette: {
    primary: { main: "#51be78" },
  },
});

const ContactForm = () => {
  return (
    <div className="fontUnClass" style={{ padding: "88px 0" }}>
      <form className="conatactConatiner" noValidate autoComplete="off">
        <ThemeProvider theme={theme}>
          <div className="conactBlock1">
            <div className="FooIn">
              <p style={{ color: "#808080", fontSize: "17.6px" }}>First Name</p>
              <TextField className="inpot" variant="outlined" />
            </div>
            <div className="FooIn">
              <p style={{ color: "#808080", fontSize: "17.6px" }}>Last Name</p>
              <TextField className="inpot" variant="outlined" />
            </div>
          </div>

          <div className="conactBlock2">
            <div className="FooIn">
              <p style={{ color: "#808080", fontSize: "17.6px" }}>
                Email Address
              </p>
              <TextField className="inpot" variant="outlined" />
            </div>
            <div className="FooIn">
              <p style={{ color: "#808080", fontSize: "17.6px" }}>
                Tel. Number
              </p>
              <TextField className="inpot" variant="outlined" />
            </div>
          </div>

          <div className="conactBlock3">
            <div className="FooIn">
              <p style={{ color: "#808080", fontSize: "17.6px" }}>Massage</p>
              <TextareaAutosize
                style={{ height: "254px", borderColor: "#808080" }}
                className="areaSty"
                aria-label="empty textarea"
              />
              <div className="conactBlock4 ">
                <ThemeProvider theme={theme2}>
                  <Button
                    variant="contained"
                    style={{
                      padding: "10px 54px",
                      color: "#fff",
                      textTransform: "capitalize",

                      fontSize: "18px",
                    }}
                    color="primary"
                  >
                    <span className="fontUnClassButton">Send Massage</span>
                  </Button>
                </ThemeProvider>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </form>
    </div>
  );
};

export default ContactForm;
