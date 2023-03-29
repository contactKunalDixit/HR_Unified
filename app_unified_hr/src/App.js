import './App.css';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
// import LoginPage from './page/LoginPage/LoginPage';
import LogOutPage from './page/LogOut/LogOutPage';
import { responsiveFontSizes, ThemeProvider } from '@mui/material';
import { theme } from './components/theme';

let responsiveSizes = responsiveFontSizes(theme);

function App() {
	return (
		<ThemeProvider theme={responsiveSizes}>
			<div className='App'>
				<ScopedCssBaseline>
					{/* <LoginPage></LoginPage> */}
					{/* <HomePage></HomePage> */}
					<LogOutPage></LogOutPage>
				</ScopedCssBaseline>
			</div>
		</ThemeProvider>
	);
}

export default App;
