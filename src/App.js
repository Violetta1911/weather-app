import { Route, Switch } from 'react-router-dom';
import CardView from './components/CardView/CardView';
import Home from './components/Home/Home';
import { withRouter } from 'react-router';

const App = () => {
	return (
		<Switch>
			<Route exact={true} path='/'>
				<Home />
			</Route>
			<Route path='/CardView'>
				<CardView />
			</Route>
		</Switch>
	);
};
const AppWithRouter = withRouter(App);
export default AppWithRouter;
