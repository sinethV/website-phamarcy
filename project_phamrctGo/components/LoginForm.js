function LoginForm() {
  try {
    const [isLogin, setIsLogin] = React.useState(true);
    const [formData, setFormData] = React.useState({
      email: '',
      password: '',
      name: '',
      phone: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [message, setMessage] = React.useState('');

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (isLogin) {
          localStorage.setItem('pharmacare_user', JSON.stringify({
            email: formData.email,
            name: 'John Doe'
          }));
          setMessage('Login successful! Redirecting to dashboard...');
          setTimeout(() => window.location.href = 'dashboard.html', 1500);
        } else {
          setMessage('Account created successfully! Please login.');
          setIsLogin(true);
          setFormData({ email: '', password: '', name: '', phone: '' });
        }
      } catch (error) {
        setMessage('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="py-16 bg-white min-h-screen" data-name="login-form" data-file="components/LoginForm.js">
        <div className="max-w-md mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-[var(--text-secondary)]">
              {isLogin ? 'Sign in to your PharmaCare account' : 'Join PharmaCare for better healthcare'}
            </p>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>

              {message && (
                <div className={`p-3 rounded-lg text-sm ${
                  message.includes('successful') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50"
              >
                {isSubmitting ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setMessage('');
                  setFormData({ email: '', password: '', name: '', phone: '' });
                }}
                className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] font-medium"
              >
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('LoginForm component error:', error);
    return null;
  }
}