import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthPrivider";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [disable, setInable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email);

    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        e.target.reset();
      });
  };

  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
            <input
              name="password"
              type={`${disable === false ? "password" : "text"}`}
              size="lg"
              placeholder="* * * * * * * *"
              className="px-4 py-1 rounded-md bg-gray-100 w-full"
            />
            <div
              className="text-xl absolute right-2 top-2"
              onClick={() => setInable(!disable)}
            >
              {disable === false ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Login"
            className="text-white btn btn-sm btn-success btn-primary"
          />
        </div>
      </form>
      <p className="mb-5 text-center">
        New to this site?
        <Link className="font-bold " to="/register">
          Please Register
        </Link>
      </p>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
