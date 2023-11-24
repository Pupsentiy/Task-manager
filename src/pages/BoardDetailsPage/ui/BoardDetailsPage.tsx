import { cls } from "@/utils/helpers";
import styles from "./BoardDetailsPage.module.scss";

interface BoardDetailsPageProps {
  className?: string;
}

const BoardDetailsPage = ({ className }: BoardDetailsPageProps) => {
  return <div className={cls([styles.BoardDetailsPage, className])}></div>;
};

export default BoardDetailsPage;
