import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function goToAbout() {
    navigate("/about");
  }

  return (
    <>
      <h1>Home Page</h1>
      <button className="bg-amber-950 text-amber-50 px-3 py-1 hover:bg-amber-500 transition-all active:scale-125 focus:border-blue-500" onClick={goToAbout}>Go To About</button>
    </>
  );
}

export default Home;
