import React from 'react';
import './App.css';
import List from './companents/list';

function App() {
	const [count, setCount] = React.useState('');
	let [countries, setCountry] = React.useState(
		JSON.parse(window.localStorage.getItem('key')) || [],
	);

	let [comp, setcomp] = React.useState([]);
	let [nocomp, setmocomp] = React.useState([]);

	let complates = countries.filter((e) => e.isComplate);
	let nocomplate = countries.filter((e) => !e.isComplate);
	let [list, setlist] = React.useState('');

	function complate(evt) {
		if (evt.target.matches('.All')) {
			setCountry([...countries]);
			setlist('');
		}
		if (evt.target.matches('.complate')) {
			setcomp([...complates]);
			setlist('comp');
		}
		if (evt.target.matches('.nocomplate')) {
			setmocomp([...nocomplate]);
			setlist('nocomp');
		}
	}

	function data(evt) {
		if (evt === '') {
			return countries;
		}
		if (evt === 'comp') {
			return comp;
		}
		if (evt === 'nocomp') {
			return nocomp;
		}
	}

	window.localStorage.setItem('key', JSON.stringify(countries));

	return (
		<div className='container'>
			<form
				onSubmit={(evt) => {
					evt.preventDefault();
					setCountry([
						...countries,
						{
							id: Number(countries.length + 1),
							name: count,
							isComplate: false,
						},
					]);
				}}>
				<input
					onChange={(evt) => {
						setCount(evt.target.value);
					}}
					type='text'
				/>
				<button type='submit'> submit</button>
			</form>
			<div onClick={(evt) => complate(evt)}>
				<button className='All'>All: {countries.length}</button>
				<button className='complate'>complate: {complates.length}</button>
				<button className='nocomplate'>nocomplate: {nocomplate.length}</button>
			</div>
			<div
				onClick={(evt) => {
					if (evt.target.matches('.delete-btn')) {
						let deletedId = +evt.target.id;
						let findedInde = countries.findIndex((todo) => {
							return todo.id === deletedId;
						});
						countries.splice(findedInde, 1);
						setCountry([...countries]);
						window.localStorage.setItem('key', JSON.stringify(countries));
					} else if (evt.target.matches('.todo-check')) {
						let id = +evt.target.id;
						countries.forEach((todo) => {
							if (todo.id === id) {
								todo.isComplate = !todo.isComplate;
							}
						});
						setCountry([...countries]);
						window.localStorage.setItem('key', JSON.stringify(countries));
					}
					if (evt.target.matches('.edit')) {
						let edit = +evt.target.id;
						let prop = prompt('kiriting');
						countries.forEach((todo) => {
							if (todo.id === edit) {
								todo.name = prop;
							}
						});
						setCountry([...countries]);
					}
				}}>
				<List data={data(list)} />
			</div>
		</div>
	);
}

export default App;
