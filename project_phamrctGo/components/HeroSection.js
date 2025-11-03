function HeroSection() {
  try {
    return (
      <div className="relative bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] py-24" data-name="hero-section" data-file="components/HeroSection.js">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)' }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Health, Our Priority
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Quality medicines, supplements, and healthcare products delivered to your doorstep. 
            Trust PharmaCare for all your pharmaceutical needs with expert consultation services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="products.html" className="btn-primary bg-white text-[var(--primary-color)] hover:bg-gray-100">
              Shop Products
            </a>
            <a href="schedule.html" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--primary-color)]">
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('HeroSection component error:', error);
    return null;
  }
}