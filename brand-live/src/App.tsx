import "./styles/globals.scss";
import "./app.scss";

import BookList from "./pages/BookList/BookList";
import ReactQueryProvider from "./Context/ReactQueryProvider";
import Header from "./components/Header/Header";

function App() {
  return (
    <ReactQueryProvider>
      <Header></Header>
      <BookList />
    </ReactQueryProvider>
  );
}

export default App;
