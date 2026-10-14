import { createContext } from "react";
import CounterScore from "./counterStore";
import { UiStore } from "./uiStore";

interface Store {
    counterStore: CounterScore
    uiStore: UiStore
}

export const store: Store = {
    counterStore: new CounterScore(),
    uiStore: new UiStore()
}

export const StoreContext = createContext(store);