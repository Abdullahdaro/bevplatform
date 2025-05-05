import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full pt-8 pb-10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="bg-gray-900 rounded-xl p-5 flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <span className="text-white font-semibold">Bev</span>
            <p className="text-white text-sm md:text-base">
              Find a volunteer or project quickly and conveniently
            </p>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white w-20 h-20 rounded-lg mr-4"></div>
            <div>
              <p className="text-white text-xs mb-2">
                Hover your smartphone's camera to download the app
              </p>
              <div className="flex gap-3 mb-2">
                <div className="w-6 h-6 bg-white rounded-lg"></div>
                <div className="w-6 h-6 bg-white rounded-lg"></div>
                <div className="w-6 h-6 bg-white rounded-lg"></div>
              </div>
              <div className="flex gap-3 text-white text-xs">
                <div>4.8 ★</div>
                <div>4.6 ★</div>
                <div>4.5 ★</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-3">Get started</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900">Home</a></li>
              <li><a href="#" className="hover:text-gray-900">Sign up</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">About us</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900">Company information</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact us</a></li>
              <li><a href="#" className="hover:text-gray-900">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-900">Help desk</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">Project of</p>
          <div className="flex items-center gap-3">
            <span className="font-semibold">Follow Us!</span>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <Twitter size={16} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer