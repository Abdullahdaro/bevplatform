
import { Search } from 'lucide-react';

function Hero() {
  return (
    <section className="flex flex-col items-center w-full max-w-5xl px-4 pt-12 pb-20">
      <div className="text-sm text-gray-600 mb-2 self-end">
        Keep in touch with the volunteers
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        A cool slogan here
      </h1>
      
      <div className="flex flex-col md:flex-row w-full max-w-xl bg-gray-100 rounded-full overflow-hidden p-2">
        <div className="flex-1 py-3 px-5 text-gray-800 font-medium">
          Volunteers for your human work
        </div>
        <button className="bg-teal-500 text-white font-medium py-3 px-5 rounded-full flex items-center justify-center gap-2">
          <Search size={18} />
          Search for volunteers
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#FF725E"/>
              <path d="M12 19.5C15.866 19.5 19 16.366 19 12.5C19 8.63401 15.866 5.5 12 5.5C8.13401 5.5 5 8.63401 5 12.5C5 16.366 8.13401 19.5 12 19.5Z" stroke="#FF725E" strokeWidth="1.5"/>
            </svg>
          </div>
          <p className="text-sm text-gray-800">
            Simple selection. All information about the candidates in one place
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#FF725E"/>
              <path d="M19 12.5H5M12 5.5V19.5" stroke="#FF725E" strokeWidth="1.5"/>
            </svg>
          </div>
          <p className="text-sm text-gray-800">
            Safely. We offer only verified profiles
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z" fill="#FF725E"/>
              <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" stroke="#FF725E" strokeWidth="1.5"/>
            </svg>
          </div>
          <p className="text-sm text-gray-800">
            No need to wait for responses. You can immediately select candidates from a selection
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero