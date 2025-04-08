import logo from "../assets/img/woodmart-logo.svg"
import { IoLocationOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";

const Nav = () => {
    return (
        <>
            <div className="flex justify-between px-14 py-6 text-[12px]">
                <div id="left" className="flex w-full">
                    <div id="logo" className="mx-6">
                        <img src={logo} alt="" />
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div id="left" className="flex gap-4">
                            <p className="flex items-center"><IoLocationOutline />Find A Store</p>
                            <p>Opened Until <span className="text-blue-800 font-bold">9PM</span></p>
                        </div>
                        <div id="right" className="">
                            <ul className="flex gap-4">
                                <li>Expert Advice</li>
                                <li>About Us</li>
                                <li>Track Order</li>
                                <li><LuUserRound /></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Nav;