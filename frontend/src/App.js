import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import AboutPet from './pages/AboutPet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
	const [ dogs, setDogs ] = React.useState([]);
	const [ cats, setCats ] = React.useState([]);
	const [ currPet, setCurrPet ] = React.useState({});

	// creates cards on startup
	React.useEffect(() => {
		getPets();
	}, []);

	const addPet = () => {
		fetch('/pets', { method: 'POST' }).then(() => {});
	};

	const getPets = () => {
		fetch('/pets').then((res) => res.json()).then((data) => {
			console.log(data);
			setCats(data.pets.filter((pet) => pet._id === 'cat').pop().pets);
			setDogs(data.pets.filter((pet) => pet._id === 'dog').pop().pets);
		});
	};

	const removePet = (petId) => {
		fetch('/pets/' + petId, { method: 'DELETE' })
			.then(() => {
				const dogsWithIdDeleted = dogs.filter((dog) => dog._id !== petId);
				setDogs(dogsWithIdDeleted);
				const catsWithIdDeleted = cats.filter((cat) => cat._id !== petId);
				setCats(catsWithIdDeleted);
				return true;
			})
			.catch((err) => {
				return false;
			});
	};

	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route exact path="/">
					<Home cats={cats} dogs={dogs} setCurrPet={setCurrPet} />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/aboutpet">
					<AboutPet pet={currPet} removePet={removePet} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
