import { AddBoardModal } from "@/components/AddBoardModal";
import { BoardBackgroundModal } from "@/components/BoardBackgroundModal";
import { BoardList } from "@/components/BoardList";
import { Text } from "@/components/ui/Text";
import { cls } from "@/utils/helpers";
import styles from "./BoardsPage.module.scss";

interface BoardsPageProps {
  className?: string;
}

const BoardsPage = ({ className }: BoardsPageProps) => {
  return (
    <div className={cls([styles.BoardsPage, className])}>
      <Text title={"Доски"} bold size={"l"} />
      <BoardList />
      <AddBoardModal />
      <BoardBackgroundModal />
    </div>
  );
};

export default BoardsPage;
