import { AddBoardModal } from "@/components/AddBoardModal";
import { BoardList } from "@/components/Board";
import { Text } from "@/components/ui/Text";
import { cls } from "@/utils/helpers/cls/cls";
import { useCallback, useState } from "react";
import styles from "./BoardsPage.module.scss";

interface BoardsPageProps {
  className?: string;
}

const BoardsPage = ({ className }: BoardsPageProps) => {
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={cls([styles.BoardsPage, className])}>
      <Text title={"Доски"} bold size={"l"} />
      <BoardList onShowModal={onShowModal} />
      <AddBoardModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};

export default BoardsPage;
