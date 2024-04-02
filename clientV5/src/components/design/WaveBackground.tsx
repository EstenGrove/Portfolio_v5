import { CSSProperties } from "react";
import styles from "../../css/design/WaveBackground.module.scss";

type TopProps = {
	options: CSSProperties | undefined;
};
type BottomProps = {
	options: CSSProperties | undefined;
};
type PaddingProps = {
	options: CSSProperties | undefined;
};

const WaveTop = ({ options }: TopProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 320"
			className={styles.WaveTop}
			style={options}
		>
			<path
				fill="#5f17e6"
				fillOpacity="1"
				d="M0,64L120,90.7C240,117,480,171,720,186.7C960,203,1200,181,1320,170.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
			></path>
		</svg>
	);
};
const Padding = ({ options }: PaddingProps) => {
	return <div className={styles.Padding} style={options}></div>;
};
const WaveBottom = ({ options }: BottomProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 320"
			className={styles.WaveBottom}
			style={options}
		>
			<path
				fill="#5f17e6"
				fillOpacity="1"
				d="M0,192L48,213.3C96,235,192,277,288,282.7C384,288,480,256,576,213.3C672,171,768,117,864,106.7C960,96,1056,128,1152,165.3C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
			></path>
		</svg>
	);
};

const renderByType = (
	type: TWaveType,
	options: IWaveConfig["options"] = {}
) => {
	const topOpts = options?.top ?? {};
	const bottomOpts = options?.bottom ?? {};
	const paddingOpts = options?.padding ?? {};

	switch (type) {
		case "top": {
			return <WaveTop key={`TOP-${crypto.randomUUID()}`} options={topOpts} />;
		}
		case "padding": {
			return (
				<Padding key={`PADDING-${crypto.randomUUID()}`} options={paddingOpts} />
			);
		}
		case "bottom": {
			return (
				<WaveBottom
					key={`BOTTOM-${crypto.randomUUID()}`}
					options={bottomOpts}
				/>
			);
		}

		default:
			return null;
	}
};

type Props = {
	order: TWaveType[];
	options?: {
		top?: CSSProperties | undefined;
		padding?: CSSProperties | undefined;
		bottom?: CSSProperties | undefined;
	};
};

type TWaveType = "top" | "bottom" | "padding";

interface IWaveConfig {
	order: TWaveType[];
	options?: {
		top?: CSSProperties | undefined;
		padding?: CSSProperties | undefined;
		bottom?: CSSProperties | undefined;
	};
}

const renderWaves = (order: TWaveType[], options: object) => {
	return (
		<>
			{order &&
				order.map((waveType: TWaveType) =>
					renderByType(waveType, options?.[waveType as keyof object] ?? {})
				)}
		</>
	);
};

const WaveBackground = ({ order = [], options }: Props) => {
	return (
		<div className={styles.WaveBackground}>
			{renderWaves(order as TWaveType[], options as object)}
		</div>
	);
};

export default WaveBackground;

WaveBackground.defaultProps = {};

WaveBackground.propTypes = {};
