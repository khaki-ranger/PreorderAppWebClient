import { createMuiTheme } from '@material-ui/core/styles';

const preoYellow = "#fbcd00";
const preoBlue = "#2c3e50";

export default createMuiTheme({
  palette: {
		common: {
			blue: `${preoBlue}`,
			yellow: `${preoYellow}`
		}
  },
  typography: {
    h2: {
      fontFamily: "Raleway",
      color: preoBlue,
    },
  }
});
