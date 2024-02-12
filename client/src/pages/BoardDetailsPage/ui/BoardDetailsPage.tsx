import { ColumnList } from "@/components/ColumnList";
import { Text } from "@/components/ui/Text";
import { cls } from "@/utils/helpers";
import { useTypedSelector } from "@/utils/hooks";
import { useParams } from "react-router-dom";
import styles from "./BoardDetailsPage.module.scss";

interface BoardDetailsPageProps {
  className?: string;
}

const BoardDetailsPage = ({ className }: BoardDetailsPageProps) => {
  const { id } = useParams();
  const board = useTypedSelector((state) => state.board.board);
  const findBoard = board.find((item) => item.id === id);

  return (
    <div
      className={cls([styles.BoardDetailsPage, className])}
      style={{ background: findBoard?.backdrop }}
    >
      <div className={styles.wrapper_title}>
        <Text title={findBoard?.title} bold size={"m"} />
      </div>
      {Boolean(findBoard) && <ColumnList columns={findBoard?.column} />}
    </div>
  );
};

export default BoardDetailsPage;
