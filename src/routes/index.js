/**
|--------------------------------
|         DEPENDENCIAS
|--------------------------------
*/
import React,{Component} 	from 'react';
import {Route ,Switch }		from 'react-router-dom';
/**
|--------------------------------
|         ASSETS
|--------------------------------
*/
import App 		from '../components/App';
import Home 	from '../components/Home';
import About 	from '../components/About';
import Contact 	from '../components/Contact';
import Page404	from '../components/Page404';
import Employees from '../components/Body';
import AboutComic from '../components/Comic';
/**
|--------------------------------
|         ROUTES
|--------------------------------
*/

const AppRoutes = () =>
	<App>
		<Switch>
				<Route path="/About" component={About}/>
				<Route path="/Contact" component={Contact}/>
				<Route path="/Employees" component={Employees}/>
				<Route path="/AboutComic/:comic" component={AboutComic}/>


				<Route path="/" component={Home}/>
				<Route component={Page404}/>
		</Switch>
	</App>;


export default AppRoutes;
