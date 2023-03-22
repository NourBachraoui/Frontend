import CohortEditDashboard from './CohortEditDashboard';
import CohortAddDashboard from './CohortAddDashboard';
import AddNewStudent from './AddNewStudent';
import Login from './Login';
import AdminDashboard from './AdminDashboard';

function App() {
  return (
    <div>
      <CohortEditDashboard />
      <CohortAddDashboard />
      <AddNewStudent />
      <Login />
      <AdminDashboard />
    </div>
  );
}

export default App;