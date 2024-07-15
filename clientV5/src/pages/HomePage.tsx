import { useState } from "react";
import styles from "../css/pages/HomePage.module.scss";
import resume from "../assets/docs/Resume.pdf";
import { enableTinyPixel } from "../utils/utils_env";
// components
import { WaveSeparator } from "../components/design/Wave";
import WaveBackground from "../components/design/WaveBackground";
import TinyPixel from "../components/shared/TinyPixel";
import Header from "../components/layout/Header";
import Modal from "../components/shared/Modal";
import AboutSection from "../components/about/AboutSection";
import QuotesSection from "../components/home/QuotesSection";
import TimelineSection from "../components/home/TimelineSection";
import SkillsSection from "../components/skills/SkillsSection";
import GradientBackground from "../components/design/GradientBackground";
import ProjectsSection from "../components/projects/ProjectsSection";

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

const isEnabled = enableTinyPixel;

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
		<div data-page="home" className={styles.HomePage}>
			<Header>
				<ResumeButton openResume={openResume} />
			</Header>
			<WaveSeparator />
			<AboutSection />
			<WaveBackground order={["top", "bottom"]} />
			<TimelineSection />
			<WaveBackground order={["top", "bottom"]} />
			<SkillsSection />
			<WaveBackground order={["top", "bottom"]} />
			<ProjectsSection />

			<GradientBackground />
			{showResumeModal && (
				<Modal closeModal={closeResume}>
					<div style={{ minHeight: "400rem" }}>content here...</div>
				</Modal>
			)}
			{/* VISITOR ANALYTICS - DISABLED LOCALLY BY DEFAULT */}
			{isEnabled && <TinyPixel pageRoute="/" />}
		</div>
	);
};

export default HomePage;

HomePage.defaultProps = {};

HomePage.propTypes = {};
