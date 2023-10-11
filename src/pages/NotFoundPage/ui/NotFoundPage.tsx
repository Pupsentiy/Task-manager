import { Text } from "components/ui/Text";
import { cls } from "utils/helpers";
import styles from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <div className={cls([styles.NotFoundPage, className])}>
      <Text title={"Not Found Page"} />
    </div>
  );
};
