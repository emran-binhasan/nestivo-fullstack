import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-blue-600 py-4 border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-2xl text-white tracking-tight font-medium">
          <Link to='/'>Nestivo</Link>
        </span>
        <span className="flex space-x-2 text-white  ">
          <Link className="cursor-pointer font-light" to='/sign-in'>Privacy Policy</Link>
          <Link className="cursor-pointer font-light" to='/sign-in'>Terms of Service</Link>
        </span>
      </div>
    </footer>
    )
};

export default Footer;