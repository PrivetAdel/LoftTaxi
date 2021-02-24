import {createMuiTheme} from '@material-ui/core/styles';

export const loftTaxiTheme = createMuiTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 375,
      sm: 600,
      md: 840,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    primary: {
      main: "#fdbf5a",
      text: "#000000"
    },
    secondary: {
      main: "#ff0000",
      text: "#828282"
    }
  },
  overrides: {
    MuiFormLabel: {
      root: {
        fontWeight: 500,
        "&$focused": {
          color: "#000"
        }
      }
    },
    MuiLink: {
      root: {
        color: "#fdbf5a",
        cursor: "pointer"
      }
    },
    MuiInputLabel: {
      root: {
        color: "#000000",
        marginBottom: '10px'
      }
    },
    MuiInput: {
      underline: {
        "&:after": {
          "border-bottom-color": "#1473e6"
        }
      }
    },
    MuiFormHelperText: {
      root: {
        position: "absolute",
        bottom: "-1.2em"
      }
    },
    MuiButton: {
      root: {
        textTransform: 'none'
      },
      containedPrimary: {
        boxShadow: "none",
        backgroundColor: "#fdbf5a",
        "&:hover": {
          backgroundColor: "#ffa842"
        },
        "&:focus": {
          boxShadow: "0 0 0 0.2rem rgba(0, 123, 255, .5)"
        }
      }
    }
  }
});
