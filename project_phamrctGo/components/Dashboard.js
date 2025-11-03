function Dashboard() {
  try {
    const [user, setUser] = React.useState(null);
    const [appointments, setAppointments] = React.useState([
      {
        id: 1,
        type: 'General Health Consultation',
        date: '2025-01-20',
        time: '10:00 AM',
        doctor: 'Dr. Sarah Johnson',
        status: 'Confirmed'
      },
      {
        id: 2,
        type: 'Medication Review',
        date: '2025-01-25',
        time: '2:00 PM',
        doctor: 'PharmD Michael Chen',
        status: 'Pending'
      }
    ]);

    React.useEffect(() => {
      const userData = localStorage.getItem('pharmacare_user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }, []);

    const handleLogout = () => {
      localStorage.removeItem('pharmacare_user');
      window.location.href = 'login.html';
    };

    if (!user) return null;

    return (
      <div className="py-8 bg-white min-h-screen" data-name="dashboard" data-file="components/Dashboard.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)]">
                Welcome back
              </h1>
              <p className="text-[var(--text-secondary)]">Manage your health and appointments</p>
            </div>
            <button onClick={handleLogout} className="btn-secondary">
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="icon-calendar text-white text-xl"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1">Upcoming Appointments</h3>
              <p className="text-2xl font-bold text-[var(--primary-color)]">{appointments.length}</p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-[var(--accent-color)] rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="icon-pill text-white text-xl"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1">Active Prescriptions</h3>
              <p className="text-2xl font-bold text-[var(--accent-color)]">3</p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="icon-shopping-bag text-white text-xl"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1">Recent Orders</h3>
              <p className="text-2xl font-bold text-[var(--secondary-color)]">5</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Scheduled Appointments</h2>
                <a href="schedule.html" className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] font-medium">
                  Schedule New
                </a>
              </div>
              
              <div className="space-y-4">
                {appointments.map(appointment => (
                  <div key={appointment.id} className="border border-[var(--border-color)] rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-[var(--text-primary)]">{appointment.type}</h3>
                        <p className="text-sm text-[var(--text-secondary)]">with {appointment.doctor}</p>
                        <p className="text-sm text-[var(--text-secondary)]">
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        appointment.status === 'Confirmed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <a href="schedule.html" className="w-full btn-primary block text-center">
                  Schedule Consultation
                </a>
                <button className="w-full btn-secondary">
                  Upload Prescription
                </button>
                <button className="w-full btn-secondary">
                  Refill Medication
                </button>
                <a href="contact.html" className="w-full btn-secondary block text-center">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Dashboard component error:', error);
    return null;
  }
}