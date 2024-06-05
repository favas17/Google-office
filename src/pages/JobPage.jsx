import { Link } from "react-router-dom"

function JobPage(){

    return(
        
        <div className="bg-black text-white min-h-screen">
            <div className="flex justify-end pt-4 pe-4">
                <Link to={"/AddJob"}><button className="bg-gray-600 rounded-sm h-10 w-32">Add Job</button></Link>
            </div>
            <div className="flex flex-grow w-full h-full items-center justify-center">
            <table className="w-full">
                <thead className="bg-gray-800">
                    <tr>
                    <th className="fields">Job</th>
                    <th className="fields">Vacancies</th>
                    <th className="fields">Requirements</th>
                    <th className="fields">Delete</th>
                    <th className="fields">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="fields">ab</td>
                        <td className="fields">cd</td>
                        <td className="fields">ef</td>
                        <td className="fields"><button>Delete</button></td>
                        <td className="fields"><button>Edit</button></td>
                    </tr>
                </tbody>
            </table>

            </div>
        </div>
    )
}

export default JobPage