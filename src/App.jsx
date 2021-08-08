import { Fragment } from "react";
import AdminHeader from "./components/AdminHeader";
import Header from "./components/Header";
import SignOut from "./components/SignOut";

function App() {
  const isAuth = false;

  return (
    <div>
      {isAuth ? (
        <Fragment>
          <AdminHeader />
          <SignOut />
        </Fragment>
      ) : (
        <Header name="Munir Mahmud" age={45}>
          <p>I love reactjs and it's convension</p>
          <button>Please Login</button>
        </Header>
      )}

      <footer>Copyright 2021</footer>
    </div>
  );
}

export default App;
