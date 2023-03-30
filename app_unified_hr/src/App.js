// import './App.css';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import LoginPage from './page/LoginPage/LoginPage';
import LogOutPage from './page/LogOut/LogOutPage';
import HomeBasePage from './page/Home/HomeBasePage';
import { responsiveFontSizes, ThemeProvider } from '@mui/material';
import { theme } from './components/theme';
import HomeBase from './page/Home/HomeBasePage';

let responsiveSizes = responsiveFontSizes(theme);

function App() {
	return (
		<ThemeProvider theme={responsiveSizes}>
			<div className='App'>
				<ScopedCssBaseline>
					{/* <LoginPage></LoginPage> */}
					<HomeBasePage></HomeBasePage>
					{/* <LogOutPage></LogOutPage> */}
				</ScopedCssBaseline>
			</div>
		</ThemeProvider>
	);
}

export default App;
