import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-dark-secondary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-dark-text">
            Course Management
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-dark-text hover:text-blue-400 transition-colors">
              Courses
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;