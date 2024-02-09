import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container mx-auto mt-8 text-center">
            <header className="bg-purple-500 p-4 flex justify-between items-center">
                <img src="src/assets/react.svg" alt="Logo" className="w-12 h-12" />
                <Link to="/register" className="bg-blue-500 text-white py-2 px-4 rounded inline-block hover:bg-sky-500">
                    Register
                </Link>
            </header>
        </div>
    );
};

export default HomePage;