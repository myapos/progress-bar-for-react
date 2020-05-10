import ReactDOM from "react-dom";
import App from "./components/App";

const element = document.getElementById("root");

const myName = "myros";

const myMainComponent = App(myName);

ReactDOM.render(myMainComponent, element);
