import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppStoreSchema } from "../store";

export const useAppSelector: TypedUseSelectorHook<AppStoreSchema> = useSelector