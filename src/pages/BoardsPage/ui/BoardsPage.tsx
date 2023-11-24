import { AddBoardModal } from "@/components/AddBoardModal";
import { BoardBackgroundModal } from "@/components/BoardBackgroundModal";
import { BoardList } from "@/components/BoardList";
import { Text } from "@/components/ui/Text";
import { resetStateAction } from "@/store/boardCreate/boardCreateActions.ts";
import { cls } from "@/utils/helpers";
import { useAppDispatch } from "@/utils/hooks";
import { useCallback, useState } from "react";
import styles from "./BoardsPage.module.scss";

interface BoardsPageProps {
  className?: string;
}

const BoardsPage = ({ className }: BoardsPageProps) => {
  const dispatch = useAppDispatch();
  const [isCreateBoardModal, setIsCreateBoardModal] = useState<boolean>(false);
  const [isBoardBackgroundModal, setIsBoardBackgroundModal] =
    useState<boolean>(false);

  const onCloseModalAddBoard = useCallback(() => {
    setIsCreateBoardModal(false);
    dispatch(resetStateAction());
  }, [dispatch]);

  const onShowModalAddBoard = useCallback(() => {
    setIsCreateBoardModal(true);
  }, []);

  const onShowModalBoardBackgroundModal = useCallback(() => {
    setIsBoardBackgroundModal(true);
  }, []);

  const onCloseBoardBackgroundModal = useCallback(() => {
    setIsBoardBackgroundModal(false);
  }, []);

  return (
    <div className={cls([styles.BoardsPage, className])}>
      <Text title={"Доски"} bold size={"l"} />
      <BoardList onShowModal={onShowModalAddBoard} />
      <AddBoardModal
        isOpen={isCreateBoardModal}
        onClose={onCloseModalAddBoard}
        onShowModalBoardBackgroundModal={onShowModalBoardBackgroundModal}
      />
      <BoardBackgroundModal
        isOpen={isBoardBackgroundModal}
        onClose={onCloseBoardBackgroundModal}
      />
    </div>
  );
};

export default BoardsPage;
