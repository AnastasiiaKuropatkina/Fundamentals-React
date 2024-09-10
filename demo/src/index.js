import React from "react";
import ReactDOM from "react-dom/client";

//import App from './components/ClassApp/App';
import { NewApp } from "./components/Post/NewApp";
import { FormApp } from "./components/Form/FormApp";

const isLoading = false;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* {<App isLoading = {isLoading}/> */}
    {<NewApp />}
    <FormApp />
  </React.StrictMode>
);
