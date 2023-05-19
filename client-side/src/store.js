import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice/authslice.js";
import dataReducer from "./features/dataSlice/dataslice.js";
import forgotReducer from "./features/forgotSlice/forgotslice.js";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { taboJsonApi } from "./services/taboJsonApi.js";
// import { taboJsonApi } from "./services/taboJsonApi.js";

const persistAuthConfig = {
  key: "user",
  storage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    data: dataReducer,
    taboJsonApi: taboJsonApi.reducer,
    forgot:forgotReducer
  },
  middleware: () =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      taboJsonApi.middleware,
    ]),
});

export const persistor = persistStore(store);
