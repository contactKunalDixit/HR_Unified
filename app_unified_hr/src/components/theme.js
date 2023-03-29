import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		neutral: {
			main: 'blue',
		},
		danger: {
			main: '#DC3545',
			contrastText: 'white',
		},
		otherColor: {
			main: 'green',
		},
	},
});
