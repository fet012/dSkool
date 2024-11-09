import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-red-600">Page Not Found</h1>
                <p className="text-lg text-gray-600">The page you're looking for doesn't exist.</p>
            </header>
            <div className="mb-8">
                <img src="https://via.placeholder.com/400" alt="404 Illustration" className="w-full max-w-md" />
            </div> 
            <div className="mb-8">
                <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Return Home
                </Link>
            </div>
            <footer className="text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="text-gray-600 hover:text-blue-500">Facebook</a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">Twitter</a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">Instagram</a>
                </div>
            </footer>
        </div>
    );
};

export default NotFoundPage;
