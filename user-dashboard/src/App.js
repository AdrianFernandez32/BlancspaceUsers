import "./App.css";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-8">User Dashboard</h1>
      <UsersList />
    </div>
  );
}

export default App;
