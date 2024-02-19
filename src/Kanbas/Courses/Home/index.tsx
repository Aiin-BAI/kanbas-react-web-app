import ModuleList from "../Modules/List";
import Homestatus from "./status";
function Home() {
    return (
        <div className="d-flex ">
            <div className=" flex-fill me-3">
                <ModuleList />
            </div>

            <div className="d-flex ms-2 d-none d-lg-block"><Homestatus /></div>

        </div>
    );
}
export default Home;