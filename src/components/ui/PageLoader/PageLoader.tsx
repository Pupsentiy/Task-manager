import { Loader } from "components/ui/Loader/Loader.tsx";
import { memo } from "react";
import { cls } from "utils/helpers";
import styles from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
  return (
    <div className={cls([styles.PageLoader, className])}>
      <Loader />
    </div>
  );
});
