import "./styles/globals.scss";
import "./app.scss";

import BookList from "./pages/BookList/BookList";
import ReactQueryProvider from "./Context/ReactQueryProvider";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { ConfigProvider } from "antd";

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
        <ReactQueryProvider>
          <Header></Header>
          <BookList />
        </ReactQueryProvider>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
