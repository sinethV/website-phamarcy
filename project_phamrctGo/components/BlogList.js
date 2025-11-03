function BlogList() {
  try {
    const [blogs, setBlogs] = React.useState([
      {
        id: 1,
        title: "5 Essential Vitamins for Immune System Support",
        excerpt: "Discover the key vitamins that can help boost your immune system naturally and keep you healthy year-round.",
        author: "Dr. Sarah Johnson",
        date: "January 15, 2025",
        category: "Wellness",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 2,
        title: "Understanding Prescription Drug Interactions",
        excerpt: "Learn about common drug interactions and how to safely manage multiple medications with expert guidance.",
        author: "PharmD Michael Chen",
        date: "January 12, 2025",
        category: "Medicine Safety",
        readTime: "7 min read",
        image: "https://www.news-medical.net/image-handler/picture/2021/1/shutterstock_544348294.jpg"
      },
      {
        id: 3,
        title: "Heart Health: Prevention and Care Tips",
        excerpt: "Comprehensive guide to maintaining cardiovascular health through lifestyle choices and preventive care.",
        author: "Dr. Emily Rodriguez",
        date: "January 10, 2025",
        category: "Health Tips",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ]);

    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const categories = ['All', 'Wellness', 'Medicine Safety', 'Health Tips', 'Nutrition'];

    const filteredBlogs = selectedCategory === 'All' 
      ? blogs 
      : blogs.filter(blog => blog.category === selectedCategory);

    return (
      <div className="py-16 bg-white" data-name="blog-list" data-file="components/BlogList.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Health & Wellness Blog
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Stay informed with the latest health tips, medicine insights, and wellness advice from our expert team
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[var(--primary-color)] text-white'
                    : 'bg-gray-100 text-[var(--text-secondary)] hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map(blog => (
              <article key={blog.id} className="card hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[var(--primary-color)] bg-[var(--accent-color)] bg-opacity-10 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-sm text-[var(--text-secondary)]">
                    {blog.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 hover:text-[var(--primary-color)] cursor-pointer">
                  {blog.title}
                </h2>
                
                <p className="text-[var(--text-secondary)] mb-4">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                      <div className="icon-user text-white text-sm"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)]">{blog.author}</p>
                      <p className="text-xs text-[var(--text-secondary)]">{blog.date}</p>
                    </div>
                  </div>
                  
                  <button className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('BlogList component error:', error);
    return null;
  }
}