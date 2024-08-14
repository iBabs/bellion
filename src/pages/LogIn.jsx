import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AppContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { AiOutlineLoading } from "react-icons/ai";


function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [see, setSee] = useState(false)

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8000/user/login", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
      setLoading(false);
      setError(false)
    } catch (error) {
      console.log(error);
      setError(error.response.data.message)
      setLoading(false);
    }
  };

  return (
    <div>
      {/*
        Heads up! 👋
      
        Plugins:
          - @tailwindcss/forms
      */}

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-rose-500 sm:text-3xl">
            Get started today
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            onSubmit={handleSubmit}
          >
            <p className="text-center text-lg font-medium">
              Sign in to your account
            </p>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={see?"text":"password"}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />

                <button type="button" className="absolute inset-y-0 end-0 grid place-content-center px-4
                "
                onClick={()=>{setSee(!see)}}
                >
                  {see? <FaEye/>: <FaEyeSlash/>}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-rose-500 px-5 py-3 text-sm font-medium text-white"
              disabled={loading}
            >
              {loading?<AiOutlineLoading className="animate-spin" />:"Sign in"}
            </button>

            <p className="text-center text-sm text-gray-500">
              No account?
              <Link className="underline" to="/signup">
                Sign up
              </Link>
            </p>
            {error && (
                  <p className="text-red-500 p-5 border border-red-500 bg-red-200 col-span-6">
                    {error}
                  </p>
                )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
