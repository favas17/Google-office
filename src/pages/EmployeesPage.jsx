import { Link } from "react-router-dom";

function EmployeesPage(){
    return(
        <div className="bg-black text-white min-h-screen">
            <div className="flex justify-end pt-4 pe-4">
                <Link to={"/AddEmployee"}><button className="bg-gray-600 rounded-sm h-10 w-32">Add Employees</button></Link>
            </div>

            <div className="flex flex-grow w-full h-full items-center justify-center">
                <table className="w-full">
                    <thead className="bg-gray-800 ">
                        <tr>
                            <th className="fields">Name</th>
                            <th className="fields">Role</th>
                            <th className="fields">Contact</th>
                            <th className="fields">Salary</th>
                            <th className="fields">Delete</th>
                            <th className="fields">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="fields ">as</td>
                            <td className="fields ">as</td>
                            <td className="fields ">S</td>
                            <td className="fields">sala</td>
                            <td className="fields">Delete</td>
                            <td className="fields ">Edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeesPage;
