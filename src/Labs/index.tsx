import { Link, useLocation } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import Add from "./a3/routing/Add";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
    const { pathname } = useLocation();
    return (
        <Provider store={store}>
        <div className="container-fluid">
            <h1>Labs</h1>
            <Nav />
            <nav className="nav nav-pills mt-2">
                <Link to="/Labs/a3"
                    className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>A3</Link> |
                <Link to="/Labs/a4"
                    className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}>A4</Link> |
            </nav>
            <Routes>
                < Route path="/a3/*" element={<Assignment3 />} />
                < Route path="/a4/*" element={<Assignment4 />} />

            </Routes>

        </div>
        </Provider>
    )
}
export default Labs;
