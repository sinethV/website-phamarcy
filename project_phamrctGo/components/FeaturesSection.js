function FeaturesSection() {
  try {
    const features = [
      {
        icon: 'truck',
        title: 'Fast Delivery',
        description: 'Free delivery on orders over $50. Get your medicines delivered within 24 hours.'
      },
      {
        icon: 'shield-check',
        title: 'Quality Assured',
        description: 'All products are sourced from licensed manufacturers and tested for quality.'
      },
      {
        icon: 'user-check',
        title: 'Expert Consultation',
        description: 'Consult with our licensed pharmacists and healthcare professionals.'
      },
      {
        icon: 'clock',
        title: '24/7 Support',
        description: 'Round-the-clock customer support for all your healthcare needs.'
      }
    ];

    return (
      <div className="py-24 bg-[var(--bg-light)]" data-name="features-section" data-file="components/FeaturesSection.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Why Choose PharmaCare?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              We're committed to providing the highest quality healthcare products and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className={`icon-${feature.icon} text-white text-2xl`}></div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('FeaturesSection component error:', error);
    return null;
  }
}