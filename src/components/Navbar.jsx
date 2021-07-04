import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
	return (
		<header className="bg-red-600">
			<div className="container mx-auto flex justify-between">
				<nav className="flex">
					<NavLink
						to="/"
						exact
						activeClassName="text-white"
						className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
					>
						Deepak
					</NavLink>
					<NavLink
						to="/post"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
						activeClassName="text-red-100 bg-black-700"
					>
						Blog Post
					</NavLink>
					<NavLink
						to="/project"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
						activeClassName="text-red-100 bg-black-700"
					>
						Projects
					</NavLink>
					<NavLink
						to="/about"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
						activeClassName="text-red-100 bg-black-700"
					>
						About Me!
					</NavLink>
				</nav>
				<div className="inline-flex py-3 px-3 my-6">
					<SocialIcon
						url="https://github.com/Deepak2-0"
						className="mr-4"
						target="_blank"
						rel="noopener noreferrer"
						fgColor="#fff"
						style={{ height: "35px", width: "35px" }}
					/>
					<SocialIcon
						url="https://www.linkedin.com/in/deepak-choudhary-578030146/"
						className="mr-4"
						target="_blank"
						rel="noopener noreferrer"
						fgColor="#fff"
						style={{ height: "35px", width: "35px" }}
					/>
					<SocialIcon
						url="https://twitter.com/DeepakC01065864"
						className="mr-4"
						target="_blank"
						rel="noopener noreferrer"
						fgColor="#fff"
						style={{ height: "35px", width: "35px" }}
					/>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
