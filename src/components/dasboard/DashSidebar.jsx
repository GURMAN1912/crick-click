import React, { useEffect, useState } from "react";
import {
    FaEdit,
    FaSignOutAlt,
    FaTicketAlt,
    FaUser,
    FaWindows,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { BiCricketBall } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { GiCricketBat } from "react-icons/gi";
import { MdStadium } from "react-icons/md";

export default function DashSidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [tab, setTab] = useState("");
    const user = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFormUrl = urlParams.get("tab");
        if (tabFormUrl) {
            setTab(tabFormUrl);
        }
    }, [location.search]);

    const handleSignOut = () => {
        localStorage.removeItem("currentUser");
        navigate("/sign-in");
        window.location.reload();
    };
    var admin = false;
    if (user.email == "admin@gmail.com") {
        admin = true;
    }
    return (
        <div className={`bg-gray-900 text-white p-6 rounded-lg  ${admin ? "" : "mt-[4rem]"}   shadow-md`}>
            <h1 className="font-semibold text-lg mb-6">
                {admin ? "Admin Panel" : "Welcome Back!"}
            </h1>
            <div className="flex justify-between flex-col min-h-screen">
                <ul className="">
                    <li>
                        {
                            user.email === "team@gmail.com" && (
                                <Link
                                    to={`/${user.password === "admin" ? "dashborad" : "profile"
                                        }?tab=profile`}
                                    className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${tab === "profile"
                                        ? "bg-green-600 text-white"
                                        : "hover:bg-gray-700"
                                        }`}
                                >
                                    <FaUser className="text-xl" />
                                    Profile
                                </Link>)
                        }
                        {
                            user.email === "user@gmail.com" && (
                                <Link
                                    to={`/${user.password === "admin" ? "dashborad" : "profile"
                                        }?tab=profile`}
                                    className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${tab === "profile"
                                        ? "bg-green-600 text-white"
                                        : "hover:bg-gray-700"
                                        }`}
                                >
                                    <FaUser className="text-xl" />
                                    Profile
                                </Link>)
                        }

                        {
                            user.email === "admin@gmail.com" && (
                                <Link
                                    to="/dashboard?tab=matches"
                                    className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${tab === "matches"
                                        ? "bg-yellow-300 text-gray-900"
                                        : "hover:bg-gray-700"
                                        }`}
                                >
                                    <BiCricketBall className="text-xl" />
                                    Add a Match
                                </Link>
                            )
                        }
                    </li>
                    <li>
                        {user.email === "user@gmail.com" && (
                            <Link
                                to={`/${user.password === "admin" ? "dashborad" : "profile"
                                    }?tab=myTickets`}
                                className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${tab === "myTickets"
                                    ? "bg-green-600 text-white"
                                    : "hover:bg-gray-700"
                                    }`}
                            >
                                <FaWindows className="text-xl" />
                                My Tickets
                            </Link>
                        )}
                        {user.email === "team@gmail.com" && (
                            <Link
                                to={`/${user.password === "admin" ? "dashborad" : "profile"
                                    }?tab=editPlayers`}
                                className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${tab === "editPlayers"
                                    ? "bg-green-600 text-white"
                                    : "hover:bg-gray-700"
                                    }`}
                            >
                                <FaEdit className="text-xl" />
                                Edit Players
                            </Link>
                        )}
                        {
                            user.email === "admin@gmail.com" && (
                                <Link
                                    to="/dashboard?tab=news"
                                    className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${tab === "news" ? "bg-yellow-300 text-gray-900" : "hover:bg-gray-700"
                                        }`}
                                >
                                    <BsNewspaper className="text-xl" />
                                    Add a News
                                </Link>

                            )
                        }
                    </li>
                    <li>
                        {user.email === "team@gmail.com" && (
                            <Link
                                to={`/${user.password === "admin" ? "dashborad" : "profile"
                                    }?tab=teamMatches`}
                                className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${tab === "teamMatches"
                                    ? "bg-green-600 text-white"
                                    : "hover:bg-gray-700"
                                    }`}
                            >
                                <BsReverseListColumnsReverse className="text-xl" />
                                Your Matches
                            </Link>
                        )}
                        {
                            user.email === "admin@gmail.com" && (
                                <Link
                                    to="/dashboard?tab=tournament"
                                    className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${tab === "tournament"
                                        ? "bg-yellow-300 text-gray-900"
                                        : "hover:bg-gray-700"
                                        }`}
                                >
                                    <GiCricketBat className="text-xl" />
                                    Add a Tournament
                                </Link>

                            )
                        }
                    </li>
                    <li>
                        {
                            user.email === "admin@gmail.com" && (
                                <Link
                                    to="/dashboard?tab=addStadium"
                                    className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${tab === "addStadium"
                                        ? "bg-yellow-300 text-gray-900"
                                        : "hover:bg-gray-700"
                                        }`}
                                >
                                    <MdStadium className="text-xl" />
                                    Add a Stadium
                                </Link>
                            )
                        }
                    </li>

                </ul>
                {
                    admin?
                    (<div className="mb-20">
                    <button
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                        onClick={handleSignOut}
                        >
                        <FaSignOutAlt className="text-xl" />
                        Sign Out
                    </button>
                </div>):null
        }
            </div>
            </div>
    );
}