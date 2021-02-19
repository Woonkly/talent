/**
 * @version 1.0.0
 * @author Tane Morgan, Sergio Trejo
 * @description <Spinner /> Component
*/

const Spinner = () => (
	<div
		style = {{
			display: 'block',
			position: 'fixed',
			right: 15,
			top: 15,
			zIndex: 1031,
		}} >
		<div
			style = {{
				animation: '400ms linear infinite spinner',
				borderBottom: '4px solid transparent',
				borderLeft: '4px solid #218cff',
				borderRadius: '50%',
				borderRight: '4px solid transparent',
				borderTop: '4px solid #218cff',
				boxSizing: 'border-box',
				height: 32,
				width: 32,
			}} />
	</div>
);

export default Spinner;