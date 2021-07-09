import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { check } from "./http/userAPI";
import { useDispatch } from "react-redux";
import setIsAuth from "./redux/actionCreators/setIsAuth";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    check()
      .then(() => {
        dispatch(setIsAuth(true));
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
