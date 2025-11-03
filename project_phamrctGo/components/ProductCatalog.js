function ProductCatalog() {
  try {
    const [products, setProducts] = React.useState([
      {
        id: 1,
        name: "Vitamin D3 1000 IU",
        category: "Vitamins",
        price: 24.99,
        originalPrice: 29.99,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "High-quality Vitamin D3 supplement for bone health and immune support",
        inStock: true,
        rating: 4.8,
        reviews: 156
      },
      {
        id: 2,
        name: "Omega-3 Fish Oil",
        category: "Supplements",
        price: 34.99,
        originalPrice: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASJCqdbRm5Acob156NXdwLcT0b5BChLb-RA&s",
        description: "Premium omega-3 fatty acids for heart and brain health",
        inStock: true,
        rating: 4.6,
        reviews: 89
      },
      {
        id: 3,
        name: "Acetaminophen 500mg",
        category: "Pain Relief",
        price: 12.99,
        originalPrice: 15.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCf20AAhaH_ViiNn7YsrbwN23URDRN7WPPig&s",
        description: "Fast-acting pain relief and fever reducer",
        inStock: true,
        rating: 4.7,
        reviews: 234
      },
      {
        id: 4,
        name: "Probiotics Complex",
        category: "Digestive Health",
        price: 42.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Advanced probiotic formula for digestive wellness",
        inStock: true,
        rating: 4.9,
        reviews: 67
      },
        {
        id: 5,
        name: "Vitamin D2  100 IU",
        category: "Vitamins",
        price: 42.99,
        originalPrice: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbCaQ_Aw5sW2_lM-P7ELIWRIoPEfU7gTfBUw&s",
        description: "Advanced probiotic formula for digestive wellness",
        inStock: true,
        rating: 4.9,
        reviews: 67
      },
        {
        id: 6,
        name: "Vitamin D7 100 IU",
        category: "Vitamins",
        price: 42.99,
        originalPrice: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIRTVFfjx4jn638ynd4gY4z9nxfRPl0n8Wg&s",
        description: "Advanced probiotic formula for digestive wellness",
        inStock: true,
        rating: 4.9,
        reviews: 67
      },
        {
        id: 7,
        name: "Probiotics Complex",
        category: "Supplements",
        price: 42.99,
        originalPrice: null,
        image: "https://www.thenakedpharmacy.com/cdn/shop/files/TNP_store_image_2B-132_1.jpg?v=1752145190&width=3123",
        description: "Advanced probiotic formula for digestive wellness",
        inStock: true,
        rating: 4.9,
        reviews: 67
      },
        {
        id: 8,
        name: "Acetaminophen 100mg",
        category: "Pain Relief",
        price: 42.99,
        originalPrice: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPgQZ6VaX6fwWICBB3DMi0kIyq8EWxkr5xw&s",
        description: "Advanced probiotic formula for digestive wellness",
        inStock: false,
        rating: 4.9,
        reviews: 67
      },
        
    ]);

    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedCategory, setSelectedCategory] = React.useState('All');

    const categories = ['All', 'Vitamins', 'Supplements', 'Pain Relief', 'Digestive Health'];

    React.useEffect(() => {
      // Get search term from URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const searchParam = urlParams.get('search');
      if (searchParam) {
        setSearchTerm(searchParam);
      }
    }, []);

    const filteredProducts = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    const addToCart = (product) => {
      const cart = JSON.parse(localStorage.getItem('pharmacare_cart') || '[]');
      const existingItem = cart.find(item => item.id === product.id);
      
      let updatedCart;
      if (existingItem) {
        updatedCart = cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...cart, { ...product, quantity: 1 }];
      }
      
      localStorage.setItem('pharmacare_cart', JSON.stringify(updatedCart));
      alert(`${product.name} added to cart!`);
      
      // Update cart count in header
      window.location.reload();
    };

    const viewProductDetail = (productId) => {
      window.location.href = `product-detail.html?id=${productId}`;
    };

    return (
      <div className="py-16 bg-white" data-name="product-catalog" data-file="components/ProductCatalog.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Our Products
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Discover our comprehensive selection of quality medicines, supplements, and healthcare products
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <div className="icon-search text-[var(--text-secondary)] text-lg"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[var(--primary-color)] text-white'
                      : 'bg-gray-100 text-[var(--text-secondary)] hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="card hover:shadow-lg transition-shadow">
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg cursor-pointer"
                    onClick={() => viewProductDetail(product.id)}
                  />
                  {product.originalPrice && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      Sale
                    </span>
                  )}
                  {!product.inStock && (
                    <span className="absolute top-2 right-2 bg-gray-500 text-white text-xs px-2 py-1 rounded">
                      Out of Stock
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <span className="text-sm text-[var(--primary-color)] font-medium">{product.category}</span>
                  <h3 
                    className="font-semibold text-[var(--text-primary)] cursor-pointer hover:text-[var(--primary-color)]"
                    onClick={() => viewProductDetail(product.id)}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center space-x-1">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(Math.floor(product.rating))}
                    </div>
                    <span className="text-sm text-[var(--text-secondary)]">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-[var(--text-primary)]">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        product.inStock
                          ? 'bg-[var(--primary-color)] text-white hover:bg-[var(--secondary-color)]'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="icon-search text-6xl text-gray-300 mb-4"></div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">No products found</h3>
              <p className="text-[var(--text-secondary)]">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProductCatalog component error:', error);
    return null;
  }
}