import './item.css';

let Iteam = (props) => {
	let complate = '';
	if (props.name.name === '') {
		return;
	}

	props.name.isComplate ? (complate = 'com') : (complate = '');

	return (
		<li className='iteam' id={props.name.id}>
			{props.name.isComplate ? (
				<input
					defaultChecked={true}
					type='checkbox'
					id={props.name.id}
					className='todo-check'
				/>
			) : (
				<input type='checkbox' id={props.name.id} className='todo-check' />
			)}

			<h2 className={complate}>{props.name.name}</h2>
			<button id={props.name.id} className='edit'>
				edit
			</button>
			<button id={props.name.id} className='delete-btn'>
				delate
			</button>
		</li>
	);
};

export default Iteam;
