import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/context';
import axios from 'axios';

const RegisterPage = () => {
  const context = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const { logInUserEmailPassword } = context;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    logInUserEmailPassword(email, password)
      .then((result) => {
        console.log(result);

        const loggedInUser = { email };
        const url = 'http://localhost:5000/jwt';

        const requestOption = {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(loggedInUser),
          credentials: 'include',
        };

        fetch(url, requestOption)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.success) {
              navigate(location?.state ? location?.state : '/');
            }
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center gap-[10rem] my-20">
      <div>
        <img src="/src/assets/FrameLogin.svg" alt="" />
      </div>
      {/*  */}
      <div className="border-2 rounded-lg px-20 py-10 border-[#D0D0D0] flex flex-col justify-start items-center gap-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#444] text-[40px] font-semibold font-inter">
            Sign Up
          </h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-[#444] text-[18px] font-semibold font-inter p-4"
              >
                Name :
              </label>
              <input
                type="text"
                placeholder="your name"
                name="name"
                className="border-2 border-[#E8E8E8] font-inter px-4 py-2 mx-4 my-2 rounded-lg  outline-none w-full"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-[#444] text-[18px] font-semibold font-inter p-4"
              >
                Email :
              </label>
              <input
                type="email"
                name="email"
                placeholder="your email"
                className="border-2 border-[#E8E8E8] font-inter px-4 py-2 mx-4 my-2 rounded-lg  outline-none w-full"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-[#444] text-[18px] font-semibold font-inter p-4"
              >
                Confirm password :
              </label>
              <input
                type="password"
                name="password"
                placeholder="your password"
                className="border-2 border-[#E8E8E8] font-inter px-4 py-2 mx-4 my-2 rounded-lg  outline-none w-full"
              />
            </div>
            <button
              type="submit"
              className="m-4 text-center text-[28px] text-white font-semibold leading-[30px] bg-fontColor border-2 border-fontColor font-inter dark:bg-fontColor  hover:dark:bg-transparent py-6 rounded-lg hover:bg-transparent hover:text-fontColor duration-500 w-full"
            >
              Sign up
            </button>
          </form>
        </div>
        <p className="text-[18px] font-inter text-[#737373]">
          Already have an account?{' '}
          <Link to="/login">
            <span className="text-fontColor font-semibold cursor-pointer">
              Sign up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
