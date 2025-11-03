function ScheduleForm() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
      consultationType: '',
      preferredDate: '',
      preferredTime: '',
      healthConcern: '',
      notes: ''
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
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitMessage('Your consultation has been scheduled! We will send you a confirmation email shortly.');
        setFormData({
          name: '', email: '', phone: '', consultationType: '',
          preferredDate: '', preferredTime: '', healthConcern: '', notes: ''
        });
      } catch (error) {
        setSubmitMessage('Sorry, there was an error scheduling your consultation. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };

    const consultationTypes = [
      'General Health Consultation',
      'Medication Review',
      'Prescription Consultation',
      'Nutrition & Wellness',
      'Chronic Disease Management',
      'Mental Health Support'
    ];

    const timeSlots = [
      '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
      '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
    ];

    return (
      <div className="py-16 bg-white" data-name="schedule-form" data-file="components/ScheduleForm.js">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Schedule a Consultation
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Book a personalized consultation with our healthcare professionals. Get expert advice tailored to your health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="icon-video text-white text-2xl"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Video Consultation</h3>
              <p className="text-[var(--text-secondary)] text-sm">Connect from anywhere with our secure video platform</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="icon-phone text-white text-2xl"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone Consultation</h3>
              <p className="text-[var(--text-secondary)] text-sm">Speak directly with our healthcare experts</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="icon-users text-white text-2xl"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">In-Person Visit</h3>
              <p className="text-[var(--text-secondary)] text-sm">Visit our clinic for comprehensive care</p>
            </div>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="consultationType" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Consultation Type *
                  </label>
                  <select
                    id="consultationType"
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  >
                    <option value="">Select consultation type</option>
                    {consultationTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="healthConcern" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Primary Health Concern *
                </label>
                <input
                  type="text"
                  id="healthConcern"
                  name="healthConcern"
                  value={formData.healthConcern}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  placeholder="Brief description of your main concern"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  placeholder="Any additional information you'd like to share..."
                ></textarea>
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-lg ${submitMessage.includes('scheduled') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ScheduleForm component error:', error);
    return null;
  }
}