import logo from "../assets/google.png"
import Button from "./Button"
function Header (){

    return(

        <div className="flex justify-between px-4 bg-inherit text-inherit">
            <img className="w-20 object-fill" src={logo} alt="Google" />
            <div>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Header