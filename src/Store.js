import rootReducer from "./State/Reducers/index";
import { createStore} from "@reduxjs/toolkit";

const store = createStore(rootReducer);

export default store;
