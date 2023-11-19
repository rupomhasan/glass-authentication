import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthPrivider";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

const SocialLogin = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const { loginMeida } = useContext(AuthContext);

  const handleSocialLogin = (provider) => {
    loginMeida(provider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="flex gap-2 mb-5 items-center mx-9">
        <div className="w-full h-[2px] bg-gray-200"></div>
        <p>OR</p>

        <div className="w-full h-[2px] bg-gray-200"></div>
      </div>
      <div className="flex justify-between items-center  mb-10 mx-10">
        <p>Login in with </p>
        <div className="flex text-2xl gap-3">
          <FcGoogle
            onClick={() => handleSocialLogin(googleProvider)}
            className="hover:underline"
          />
          <FaGithub
            onClick={() => handleSocialLogin(githubProvider)}
            className="hover:underline"
          />
          <FaFacebook
            onClick={() => handleSocialLogin(facebookProvider)}
            className="hover:underline"
          />
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
