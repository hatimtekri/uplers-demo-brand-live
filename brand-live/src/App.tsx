import "./styles/globals.scss";
import "./app.scss";

import BookList from "./pages/BookList/BookList";
import ReactQueryProvider from "./Context/ReactQueryProvider";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <ReactQueryProvider>
        <Header></Header>
        <BookList />
      </ReactQueryProvider>
    </Provider>
  );
}

export default App;
