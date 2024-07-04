import "./styles/globals.scss";
import "./app.scss";
import { PersistGate } from "redux-persist/integration/react";

import ReactQueryProvider from "./Context/ReactQueryProvider";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store";
import { ConfigProvider } from "antd";
import BookListPage from "./pages/BookList/BookList";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: `"Poppins"`,
        },
        cssVar: false,
        hashed: false,
      }}
    >
      <Provider store={store}>
        <PersistGate  persistor={persistor}>
          <ReactQueryProvider>
            <Header></Header>

            <BookListPage />
          </ReactQueryProvider>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
