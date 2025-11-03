function ProductDetail() {
  try {
    const [product, setProduct] = React.useState(null);
    const [quantity, setQuantity] = React.useState(1);
    const [activeTab, setActiveTab] = React.useState('description');

    React.useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id');
      
      // Mock product data - in real app, fetch from API
      const productData = {
        1: {
          id: 1,
          name: "Omega-3 Fish Oil",
          category: "Supplements",
          price: 24.99,
          originalPrice: 29.99,
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "High-quality Vitamin D3 supplement for bone health and immune support. Essential for calcium absorption and maintaining strong bones.",
          ingredients: ["Vitamin D3 (Cholecalciferol) 1000 IU", "Microcrystalline Cellulose", "Vegetable Magnesium Stearate"],
          dosage: "Take 1 capsule daily with food or as directed by healthcare professional",
          warnings: "Consult your doctor before use if pregnant, nursing, or taking medications",
          inStock: true,
          rating: 4.8,
          reviews: 156,
          sku: "VD3-1000",
          manufacturer: "PharmaCare Labs"
        },
         2: {
          id: 2,
          name: "Vitamin D3 1000 IU",
          category: "Vitamins",
          price: 24.99,
          originalPrice: 29.99,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASJCqdbRm5Acob156NXdwLcT0b5BChLb-RA&s",
          description: "High-quality Vitamin D3 supplement for bone health and immune support. Essential for calcium absorption and maintaining strong bones.",
          ingredients: ["Vitamin D3 (Cholecalciferol) 1000 IU", "Microcrystalline Cellulose", "Vegetable Magnesium Stearate"],
          dosage: "Take 1 capsule daily with food or as directed by healthcare professional",
          warnings: "Consult your doctor before use if pregnant, nursing, or taking medications",
          inStock: true,
          rating: 4.8,
          reviews: 156,
          sku: "VD3-1000",
          manufacturer: "PharmaCare Labs"
        },
         3: {
          id: 3,
         name: "Acetaminophen 500mg",
        category: "Pain Relief",
        price: 12.99,
        originalPrice: 15.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCf20AAhaH_ViiNn7YsrbwN23URDRN7WPPig&s",
        description: "Fast-acting pain relief and fever reducer",
         ingredients: ["Vitamin D3 (Cholecalciferol) 1000 IU", "Microcrystalline Cellulose", "Vegetable Magnesium Stearate"],
        dosage: "Take 1 capsule daily with food or as directed by healthcare professional",
          warnings: "Consult your doctor before use if pregnant, nursing, or taking medications",
        inStock: true,
        rating: 4.7,
        reviews: 234,
          sku: "VD3-1000",
          manufacturer: "PharmaCare Labs"
        },
         4: {
           id: 4,
        name: "Probiotics Complex",
        category: "Digestive Health",
        price: 42.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Advanced probiotic formula for digestive wellness",
         ingredients: ["Vitamin D3 (Cholecalciferol) 1000 IU", "Microcrystalline Cellulose", "Vegetable Magnesium Stearate"],
          dosage: "Take 1 capsule daily with food or as directed by healthcare professional",
          warnings: "Consult your doctor before use if pregnant, nursing, or taking medications",
        inStock: true,
        rating: 4.9,
        reviews: 67,
          sku: "VD3-1000",
          manufacturer: "PharmaCare Labs"
        },
        5: {
        id: 5,
        name: "Vitamin D2  100 IU",
        category: "Vitamins",
        price: 42.99,
        originalPrice: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbCaQ_Aw5sW2_lM-P7ELIWRIoPEfU7gTfBUw&s",
        description: "Advanced probiotic formula for digestive wellness",
         ingredients: ["Vitamin D3 (Cholecalciferol) 1000 IU", "Microcrystalline Cellulose", "Vegetable Magnesium Stearate"],
          dosage: "Take 1 capsule daily with food or as directed by healthcare professional",
          warnings: "Consult your doctor before use if pregnant, nursing, or taking medications",
        inStock: true,
        rating: 4.9,
        reviews: 67,
          sku: "VD3-1000",
          manufacturer: "PharmaCare Labs"
        },
         6: {
          id: 6,
        name: "Vitamin D7 100 IU",
        category: "Vitamins",
        price: 42.99,
        originalPrice: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIRTVFfjx4jn638ynd4gY4z9nxfRPl0n8Wg&s",
        description: "Advanced probiotic formula for digestive wellness",
         ingredients: ["Vitamin D3 (Cholecalciferol) 1000 IU", "Microcrystalline Cellulose", "Vegetable Magnesium Stearate"],
          dosage: "Take 1 capsule daily with food or as directed by healthcare professional",
          warnings: "Consult your doctor before use if pregnant, nursing, or taking medications",
        inStock: true,
        rating: 4.9,
        reviews: 67,
          sku: "VD3-1000",
          manufacturer: "PharmaCare Labs"
        },
         7: {
           id: 7,
        name: "Probiotics Complex",
        category: "Supplements",
        price: 42.99,
        originalPrice: null,
        image: "https://www.thenakedpharmacy.com/cdn/shop/files/TNP_store_image_2B-132_1.jpg?v=1752145190&width=3123",
        description: "Advanced probiotic formula for digestive wellness",
         ingredients: ["Vitamin D3 (Cholecalciferol) 1000 IU", "Microcrystalline Cellulose", "Vegetable Magnesium Stearate"],
          dosage: "Take 1 capsule daily with food or as directed by healthcare professional",
          warnings: "Consult your doctor before use if pregnant, nursing, or taking medications",
        inStock: true,
        rating: 4.9,
        reviews: 67,
          sku: "VD3-1000",
          manufacturer: "PharmaCare Labs"
        },
         8: {
           id: 8,
        name: "Acetaminophen 100mg",
        category: "Pain Relief",
        price: 42.99,
        originalPrice: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPgQZ6VaX6fwWICBB3DMi0kIyq8EWxkr5xw&s",
        description: "Advanced probiotic formula for digestive wellness",
         ingredients: ["Vitamin D3 (Cholecalciferol) 1000 IU", "Microcrystalline Cellulose", "Vegetable Magnesium Stearate"],
          dosage: "Take 1 capsule daily with food or as directed by healthcare professional",
          warnings: "Consult your doctor before use if pregnant, nursing, or taking medications",
        inStock: false,
        rating: 4.9,
        reviews: 67,
          sku: "VD3-1000",
          manufacturer: "PharmaCare Labs"
        }
      };

      //add more is product data here omega-3 fish oil
     

      setProduct(productData[productId] || productData[1]);
    }, []);

    const addToCart = () => {
      const cartItem = { ...product, quantity };
      console.log('Added to cart:', cartItem);
      alert(`Added ${quantity} ${product.name} to cart!`);
    };

    if (!product) return <div>Loading...</div>;

    return (
      <div className="py-16 bg-white" data-name="product-detail" data-file="components/ProductDetail.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li><a href="index.html" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Home</a></li>
              <li><span className="text-[var(--text-secondary)]">/</span></li>
              <li><a href="products.html" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Products</a></li>
              <li><span className="text-[var(--text-secondary)]">/</span></li>
              <li><span className="text-[var(--text-primary)]">{product.name}</span></li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-sm text-[var(--primary-color)] font-medium">{product.category}</span>
                <h1 className="text-3xl font-bold text-[var(--text-primary)] mt-2">{product.name}</h1>
                <p className="text-[var(--text-secondary)] mt-2">SKU: {product.sku}</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex text-yellow-400 text-lg">
                  {'★'.repeat(Math.floor(product.rating))}
                </div>
                <span className="text-[var(--text-secondary)]">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-[var(--text-primary)]">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="font-medium">Quantity:</label>
                  <div className="flex items-center border border-[var(--border-color)] rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-[var(--border-color)]">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button onClick={addToCart} className="flex-1 btn-primary">
                    Add to Cart
                  </button>
                  <button className="btn-secondary">
                    <div className="icon-heart text-xl"></div>
                  </button>
                </div>
              </div>

              <div className="border-t border-[var(--border-color)] pt-6">
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>Manufacturer:</strong> {product.manufacturer}
                </p>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  <strong>Availability:</strong> {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="border-b border-[var(--border-color)] mb-6">
              <nav className="flex space-x-8">
                {['description', 'ingredients', 'dosage', 'warnings'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                      activeTab === tab
                        ? 'border-[var(--primary-color)] text-[var(--primary-color)]'
                        : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="prose max-w-none">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Product Description</h3>
                  <p className="text-[var(--text-secondary)]">{product.description}</p>
                </div>
              )}
              {activeTab === 'ingredients' && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-[var(--text-secondary)]">{ingredient}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'dosage' && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Dosage & Usage</h3>
                  <p className="text-[var(--text-secondary)]">{product.dosage}</p>
                </div>
              )}
              {activeTab === 'warnings' && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Warnings & Precautions</h3>
                  <p className="text-[var(--text-secondary)]">{product.warnings}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProductDetail component error:', error);
    return null;
  }
}