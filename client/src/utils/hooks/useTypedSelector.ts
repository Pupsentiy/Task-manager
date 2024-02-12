import { RootState } from "@/app/providers/StoreProvider/config/store.ts";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
