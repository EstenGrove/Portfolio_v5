import { useState } from "react";
import styles from "../css/pages/HomePage.module.scss";
import resume from "../assets/docs/Resume.pdf";
// components
import WaveBackground from "../components/design/WaveBackground";
import { WaveSeparator } from "../components/design/Wave";
import Header from "../components/layout/Header";
import Modal from "../components/shared/Modal";
import AboutSection from "../components/about/AboutSection";
import QuotesSection from "../components/home/QuotesSection";
import TimelineSection from "../components/home/TimelineSection";

type Props = {};

type TResumeButton = {
	openResume: () => void;
};

const ResumeButton = ({ openResume }: TResumeButton) => {
	return (
		<button type="button" onClick={openResume} className={styles.ResumeButton}>
			Resume
		</button>
	);
};

const HomePage = () => {
	const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
	const [resumeSrc, setResumeSrc] = useState(resume);

	const openResume = () => {
		setShowResumeModal(true);
	};
	const closeResume = () => {
		setShowResumeModal(false);
	};

	return (
		<div className={styles.HomePage}>
			<Header>
				<ResumeButton openResume={openResume} />
			</Header>
			<WaveSeparator />
			<AboutSection />
			<WaveBackground order={["top", "bottom"]} />
			<TimelineSection />
			{/* <QuotesSection /> */}

			{showResumeModal && (
				<Modal closeModal={closeResume}>
					<div style={{ minHeight: "400rem" }}>content here...</div>
				</Modal>
			)}
		</div>
	);
};

export default HomePage;

HomePage.defaultProps = {};

HomePage.propTypes = {};
