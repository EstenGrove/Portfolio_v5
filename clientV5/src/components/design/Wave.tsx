import styles from "../../css/design/Wave.module.scss";

const TopWave1 = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 320"
			className={styles.TopWave1}
		>
			<path
				fill="#5f17e6"
				fillOpacity="1"
				d="M0,64L120,90.7C240,117,480,171,720,186.7C960,203,1200,181,1320,170.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
			></path>
		</svg>
	);
};

const MiddleWave1 = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 320"
			className={styles.MiddleWave1}
		>
			{/* <rect x="0" y="0" width="100%" height="100%" fill="#5f17e6"></rect> */}
			<path
				fill="#5f17e6"
				fillOpacity="1"
				d="M0,224L1440,160L1440,0L0,0Z"
			></path>
		</svg>
	);
};

const WavePadding = () => {
	return <div className={styles.WavePadding}></div>;
};

const BottomWave1 = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 320"
			className={styles.BottomWave1}
		>
			<path
				fill="#5f17e6"
				fillOpacity="1"
				d="M0,192L48,213.3C96,235,192,277,288,282.7C384,288,480,256,576,213.3C672,171,768,117,864,106.7C960,96,1056,128,1152,165.3C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
			></path>
		</svg>
	);
};

const Wave = () => {
	return (
		<div className={styles.Wave}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				className={styles.Wave_top}
			>
				{/* <rect x="0" y="0" width="900" height="600" fill="#5f17e6"></rect> */}
				<path
					fill="#5f17e6"
					fillOpacity="1"
					d="M0,64L120,90.7C240,117,480,171,720,186.7C960,203,1200,181,1320,170.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
				></path>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				className={styles.Wave_middle}
			>
				{/* <rect x="0" y="0" width="100%" height="100%" fill="#5f17e6"></rect> */}
				<path
					fill="#5f17e6"
					fillOpacity="1"
					d="M0,224L1440,160L1440,0L0,0Z"
				></path>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				className={styles.Wave_bottom}
			>
				<path
					fill="#5f17e6"
					fillOpacity="1"
					d="M0,192L48,213.3C96,235,192,277,288,282.7C384,288,480,256,576,213.3C672,171,768,117,864,106.7C960,96,1056,128,1152,165.3C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
				></path>
			</svg>
		</div>
	);
};

const WaveSeparator = () => {
	return (
		<div className={styles.WaveSeparator}>
			<TopWave1 />
			<WavePadding />
			<BottomWave1 />
		</div>
	);
};

export { TopWave1, BottomWave1, MiddleWave1, WavePadding, WaveSeparator };

export default Wave;

Wave.defaultProps = {};

Wave.propTypes = {};
