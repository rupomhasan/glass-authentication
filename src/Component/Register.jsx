import { Card, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthPrivider";
import toast from "react-hot-toast";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
  const [disable, setInable] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        e.target.reset()
      })
      .catch((error) => {
        console.log(error.message);
        
      });
  };

  return (
    <Card
      className="text-center max-w-lg rounded-xl mx-auto shadow-2xl pt-10 px-5"
      color="transparent"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 text-left w-80 max-w-screen-lg mx-auto sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            name="name"
            type="text"
            placeholder="name"
            className="px-4 py-1 rounded-md bg-gray-100"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            name="email"
            type="email"
            placeholder="name@mail.com"
            className="px-4 py-1 rounded-md bg-gray-100"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <div className="relative">
            <Input
              name="password"
              type={`${disable === false ? 'password' : 'text'}`}
              size="lg"
              placeholder="* * * * * * * *"
              className="px-4 py-1 rounded-md bg-gray-100"
            />
            <div className="text-xl absolute right-2 top-2" onClick={()=>setInable(!disable)}>{disable === false ? <FaRegEyeSlash /> : <FaRegEye />}</div>
          </div>
        </div>
        <div className="flex gap-2 my-6">
          <input type="checkbox" />
          <p>
            I agree
            <Link className="font-bold" to="">
              Terms And Condition
            </Link>
          </p>
        </div>
        <input
          type="submit"
          className="btn btn-sm btn-success text-white w-full"
          value="Register"
        />
      </form>
      <p>
        All Ready Have An Acount?
        <Link className="font-bold hover:underline text-lg" to="/login">
          Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </Card>
  );
};

export default Register;
