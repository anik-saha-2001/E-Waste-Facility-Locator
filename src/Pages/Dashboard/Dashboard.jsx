import Navbar from "../../Components/Navbar/Navbar";
import "./dashboard.scss";

const Dashboard = () => {
  const userData = {
    username: 'tharon',
    email: 'iamtharon@example.com',
    credits: 216,
  };
  return (
    <div>
      <Navbar />
      <div className="dashboard">
      <div className="dashboard-user-info">
        <h2>Welcome, {userData.username}!</h2>
        <p>Email: {userData.email}</p>
      </div>
      <div className="dashboard-credits">
        <h3>Your Credits</h3>
        <p>{userData.credits} Credits</p>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
