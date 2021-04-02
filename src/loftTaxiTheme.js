import {createMuiTheme} from '@material-ui/core/styles';

export const loftTaxiTheme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl", "tablet", "laptop", "desktop"],
    values: {
      xs: 375,
      sm: 600,
      md: 800,
      lg: 1280,
      xl: 1920,
      tablet: 736,
      laptop: 1024,
      desktop: 1280,
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
  spacing: 8,
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
        marginBottom: "10px"
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
        color: "red"
      }
    },
    MuiContainer: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        backgroundColor: '#fff'
      }
    },
    MuiButton: {
      root: {
        textTransform: "none"
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
