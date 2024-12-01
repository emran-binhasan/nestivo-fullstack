import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="bg-[#008080] py-4 ">
        <div className="max-w-7xl mx-auto flex justify-between items-center ">
          <span className="text-2xl text-white tracking-tight font-medium">
            <Link to='/'>Nestivo</Link>
          </span>
          <span className="flex space-x-2 ">
            <Link className="border-2 border-blue-400 rounded text-blue-700 font-medium px-2 py-1 bg-white" to='/sign-in'>Sign In</Link>
            <Link className="border-2 border-blue-400 rounded text-blue-700 font-medium px-2 py-1 bg-white" to='/register'>Register</Link>

          </span>
        </div>
      </header>
    );
};

export default Header;