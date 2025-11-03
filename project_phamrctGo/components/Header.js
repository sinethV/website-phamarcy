function Header() {
  try {
    const [cartCount, setCartCount] = React.useState(0);
    const [searchTerm, setSearchTerm] = React.useState('');

    React.useEffect(() => {
      // Load cart count from localStorage
      const cart = JSON.parse(localStorage.getItem('pharmacare_cart') || '[]');
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalItems);
    }, []);

    const handleSearch = (e) => {
      e.preventDefault();
      if (searchTerm.trim()) {
        window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
      }
    };
    
    const handleNavigation = (page) => {
      if (page === 'home') {
        window.location.href = 'index.html';
      } else if (page === 'products') {
        window.location.href = 'products.html';
      } else if (page === 'blog') {
        window.location.href = 'blog.html';
      } else if (page === 'contact') {
        window.location.href = 'contact.html';
      } else if (page === 'schedule') {
        window.location.href = 'schedule.html';
      } else if (page === 'login') {
        window.location.href = 'login.html';
      }
    };

    return (
      <header className="bg-white shadow-sm border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[var(--primary-color)] rounded-md flex items-center justify-center">
                  <div className="icon-heart text-white text-lg"></div>
                </div>
                <span className="text-xl font-bold text-[var(--text-primary)]">PharmaCare</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => handleNavigation('home')} className="nav-link">Home</button>
                <button onClick={() => handleNavigation('products')} className="nav-link">Products</button>
                <button onClick={() => handleNavigation('blog')} className="nav-link">Blog</button>
                <button onClick={() => handleNavigation('contact')} className="nav-link">Contact</button>
                <button onClick={() => handleNavigation('schedule')} className="btn-primary">Schedule Consultation</button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <form onSubmit={handleSearch} className="flex-1 max-w-lg">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search medicines, supplements..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                  <button type="submit" className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <div className="icon-search text-[var(--text-secondary)] text-lg hover:text-[var(--primary-color)]"></div>
                  </button>
                </div>
              </form>

              <button onClick={() => handleNavigation('login')} className="nav-link">Login</button>
              
              <div className="relative">
                <button 
                  onClick={() => window.location.href = 'cart.html'}
                  className="p-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
                >
                  <div className="icon-shopping-cart text-xl"></div>
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[var(--primary-color)] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}