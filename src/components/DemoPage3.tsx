import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DemoPage3 = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">Demo Page 3</h1>
        
        <div className="mb-6">
          <p className="text-lg mb-4">Counter: {count}</p>
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Increase Count
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <button 
            onClick={() => navigate('/')}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Go Back to Home
          </button>
          
          <div className="flex gap-2">
            <button 
              onClick={() => navigate('/demo2')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors flex-1"
            >
              ← Previous (Demo 2)
            </button>
            <button 
              onClick={() => navigate('/demo1')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors flex-1"
            >
              Next (Demo 1) →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage3;
