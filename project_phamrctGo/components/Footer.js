function Footer() {
  try {
    return (
      <footer className="bg-[var(--secondary-color)] text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <div className="icon-heart text-[var(--primary-color)] text-lg"></div>
                </div>
                <span className="text-xl font-bold">PharmaCare</span>
              </div>
              <p className="text-white/80">
                Your trusted healthcare partner for quality medicines and professional consultation services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="index.html" className="text-white/80 hover:text-white">Home</a></li>
                <li><a href="products.html" className="text-white/80 hover:text-white">Products</a></li>
                <li><a href="blog.html" className="text-white/80 hover:text-white">Blog</a></li>
                <li><a href="contact.html" className="text-white/80 hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="schedule.html" className="text-white/80 hover:text-white">Consultation</a></li>
                <li><a href="products.html" className="text-white/80 hover:text-white">Prescription Refill</a></li>
                <li><a href="dashboard.html" className="text-white/80 hover:text-white">Patient Portal</a></li>
                <li><a href="contact.html" className="text-white/80 hover:text-white">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-white/80">
                <p>📞 1-800-PHARMA-CARE</p>
                <p>📧 info@pharmacare.com</p>
                <p>📍 123 Health Street, Medical City, MC 12345</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
            <p>&copy; 2025 PharmaCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}