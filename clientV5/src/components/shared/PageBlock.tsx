import { ReactNode } from "react";
import styles from "../../css/shared/PageBlock.module.scss";

type Props = { children: ReactNode };

const PageBlock = ({ children }: Props) => {
	return <div className={styles.PageBlock}>{children}</div>;
};

export default PageBlock;
