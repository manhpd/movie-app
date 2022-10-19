import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from './components/Navbar';
import { Outlet } from "react-router-dom";

const App = () => {
	return (
		<div>
        <Navbar/>
        <Outlet />
		</div>
	);
};

export default App;