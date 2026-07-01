import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }

  useEffect(() => {
    async function getDashboardData() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/");
          return;
        }

        const request = await fetch("http://localhost:3000/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const response = await request.json();

        if (response.success) {
          setUser(response.user);
        } else {
          navigate("/");
        }
      } catch (e) {
        console.log(e.message);
        navigate("/");
      }
    }

    getDashboardData();
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

        {user ? (
          <>
            <p className="mb-2">
              <strong>User ID:</strong> {user.id}
            </p>

            <p className="mb-4">
              <strong>Email:</strong> {user.email}
            </p>

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
