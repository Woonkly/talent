/**
 * @version 1.0.0
 * @author Tane Morgan, Sergio Trejo
 * @description <Progress /> Component
*/

import { useNProgress } from '@tanem/react-nprogress';
import PropTypes 	from 'prop-types';
import Bar 			from './Bar';
import Container 	from './Container';
import Spinner 		from './Spinner';

const Progress = ({ isAnimating }) => {

	const { animationDuration, isFinished, progress } = useNProgress({
		isAnimating
	});

	return (
		<Container isFinished = { isFinished } animationDuration = { animationDuration }>
			<Bar progress = { progress } animationDuration = { animationDuration } />
			<Spinner />
		</Container>
	);
}

Progress.propTypes = {
	isAnimating: PropTypes.bool.isRequired
};

export default Progress;
