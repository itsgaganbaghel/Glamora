// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-black  text-gray-400 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {/* About */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase mb-4">
                About
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Stories</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Corporate Info</a></li>
              </ul>
            </div>
  
            {/* Group Companies */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase mb-4">
                Group Companies
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Myntra</a></li>
                <li><a href="#" className="hover:text-white">Cleartrip</a></li>
                <li><a href="#" className="hover:text-white">Shopsy</a></li>
              </ul>
            </div>
  
            {/* Help */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase mb-4">
                Help
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Payments</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
                <li><a href="#" className="hover:text-white">Cancellation & Returns</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
  
            {/* Consumer Policy */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase mb-4">
                Consumer Policy
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Cancellation & Returns</a></li>
                <li><a href="#" className="hover:text-white">Terms Of Use</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Sitemap</a></li>
                <li><a href="#" className="hover:text-white">Grievance Redressal</a></li>
              </ul>
            </div>
  
            {/* Address */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase mb-4">
                Mail Us
              </h4>
              <p className="text-sm leading-relaxed">
                Glamora Pvt Ltd, Building XYZ, Tech Village,
                Outer Ring Road, Bengaluru, 560103, Karnataka, India
              </p>
              <h4 className="text-sm font-semibold text-gray-400 uppercase mt-6 mb-2">
                Registered Office Address
              </h4>
              <p className="text-sm leading-relaxed">
                Glamora Pvt Ltd, Building XYZ, Tech Village,
                Outer Ring Road, Bengaluru, 560103, Karnataka, India
              </p>
            </div>
          </div>
  
          {/* Bottom */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-smd text-gray-500">
            © {new Date().getFullYear()} Glamora. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  