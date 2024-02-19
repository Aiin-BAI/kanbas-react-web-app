import {Link} from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import {Routes, Route,Navigate} from "react-router-dom";
import Nav from "../Nav";
import Add from "./a3/routing/Add";
function Labs() {
return(
<div className="container-fluid">
<h1>Labs</h1>
<Nav />
<Link to="/Labs/a3">A3</Link> |
<Link to="/Labs/a4">A4</Link> |
<Routes>
    < Route path = "/a3/*" element={<Assignment3 />} />
    < Route path = "/a4" element={<Assignment4 />} />
  
</Routes>

</div>
)
}
export default Labs;
