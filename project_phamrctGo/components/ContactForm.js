function ContactForm() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitMessage, setSubmitMessage] = React.useState('');

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitMessage('Thank you for your message! We will get back to you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } catch (error) {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="py-16 bg-white" data-name="contact-form" data-file="components/ContactForm.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Have questions about our products or services? We're here to help you with all your healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-phone text-white text-xl"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Phone</h3>
                    <p className="text-[var(--text-secondary)]">+1 (555) 123-4567</p>
                    <p className="text-sm text-[var(--text-secondary)]">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-mail text-white text-xl"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Email</h3>
                    <p className="text-[var(--text-secondary)]">support@pharmacare.com</p>
                    <p className="text-sm text-[var(--text-secondary)]">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-map-pin text-white text-xl"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Address</h3>
                    <p className="text-[var(--text-secondary)]">123 Health Street<br />Medical City, MC 12345</p>
                    <p className="text-sm text-[var(--text-secondary)]">Open Mon-Sat 8AM-8PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="prescription">Prescription Question</option>
                    <option value="consultation">Medical Consultation</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Please describe your question or concern..."
                  ></textarea>
                </div>

                {submitMessage && (
                  <div className={`p-4 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ContactForm component error:', error);
    return null;
  }
}