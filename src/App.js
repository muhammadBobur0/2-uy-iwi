import React from 'react';
import './App.css';
import Iteam from './companents/item';
import List from './companents/list';

function App() {
	const [count, setCount] = React.useState('');
	let backlocal = JSON.parse(window.localStorage.getItem('key'));
	let [countries, setCountry] = React.useState([]);

	if (countries.length === 0) {
		if (backlocal === undefined) {
			return;
		} else {
			return countries.push(...backlocal);
		}
	}

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
			<div
				onClick={(evt) => {
					if (evt.target.matches('.delete-btn')) {
						let deletedId = evt.target.Id;
						let findedInde = countries.findIndex(
							(todo) => todo.id === deletedId,
						);
						countries.splice(findedInde, 1);
						setCountry([...countries]);
						window.localStorage.setItem('key', JSON.stringify(countries));
					} else if (evt.target.matches('.todo-check')) {
						let id = evt.target.id;
						countries.map((todo) => {
							if (todo.id === id) {
								return (todo.isComplate = !todo.isComplate);
							}
							return (todo.isComplate = !todo.isComplate);
						});

						setCountry([...countries]);
						window.localStorage.setItem('key', JSON.stringify(countries));
					}
				}}>
				<List>
					{countries.map((el) => (
						<Iteam key={el.id} name={el} />
					))}
					{window.localStorage.setItem('key', JSON.stringify(countries))}
				</List>
			</div>
		</div>
	);
}

export default App;
