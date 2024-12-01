import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="bg-blue-600 py-4 border">
        <div className="max-w-7xl mx-auto flex justify-between items-center border">
          <span className="text-2xl text-white tracking-tight font-medium">
            <Link to='/'>Nestivo</Link>
          </span>
          <span className="flex space-x-2 text-white  ">
            <Link className="border px-2 py-1" to='/sign-in'>Sign In</Link>

          </span>
        </div>
      </header>
    );
};

export default Header;