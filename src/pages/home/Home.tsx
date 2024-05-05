import { Navigate } from "react-router-dom";
import { doSignOut } from "../../firebase/auth";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button
        type="button"
        onClick={() =>
          doSignOut().then(() => {
            <Navigate to={"/login"} replace={true} />;
          })
        }
        className="hover:bg-white hover:text-blue-600 border hover:border-blue-600 py-2 px-4  rounded-xl bg-blue-600 text-white text-lg font-bold"
      >Logout</button>
    </div>
  );
};

export default Home;
