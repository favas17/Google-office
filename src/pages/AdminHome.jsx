import Header from "../components/Header";
import Button from "../components/Button";
import { Link } from "react-router-dom";
function AdminHome() {

    return (
        <div className="bg-black text-white min-h-screen w-full flex flex-col">
            <Header/>
            <div className="flex flex-grow justify-evenly items-center">
                <Link to={"/JobPage"}><Button className={"bg-gray-600 w-36 h-10 font-bold rounded-sm"} Label={"Job Vacancies"}/></Link>
                <Link to={"/Employees"}><Button className={"bg-gray-600 w-36 h-10 font-bold rounded-sm"} Label={"Our Employees"}/> </Link>
            </div>
        </div>
    );
}

export default AdminHome;
