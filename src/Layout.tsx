import { Provider } from "react-redux";
import { Outlet } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import { commonStore, persistor } from "./store/store";

const Layout = () => {
  return (
    <div>
      <Provider store={commonStore}>
        <PersistGate loading={null} persistor={persistor}>
            <Outlet />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default Layout;
