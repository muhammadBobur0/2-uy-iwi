import Iteam from './item';

let List = ({ data }) => {
	return (
		<ul>
			{data?.map((el) => (
				<Iteam key={el.id} name={el} />
			))}
		</ul>
	);
};

export default List;
