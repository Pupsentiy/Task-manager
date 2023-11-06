import { Loader } from "@/components/ui/Loader";
import { cls } from "@/utils/helpers/cls/cls.ts";
import { memo } from "react";
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
