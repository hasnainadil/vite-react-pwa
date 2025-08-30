import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import appLogo from '/favicon.svg';
import PWABadge from '../PWABadge.tsx';

const Home = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    return (
        <div className=' w-full flex flex-col items-center justify-center'>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={appLogo} className="logo" alt="vite-react-pwa logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>vite-react-pwa</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Demo Pages</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                        onClick={() => navigate('/demo1')}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Demo Page 1
                    </button>
                    <button
                        onClick={() => navigate('/demo2')}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Demo Page 2
                    </button>
                    <button
                        onClick={() => navigate('/demo3')}
                        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Demo Page 3
                    </button>
                </div>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <PWABadge />
        </div>
    );
};

export default Home;
