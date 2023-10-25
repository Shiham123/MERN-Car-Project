import { useContext } from 'react';
import { AppContext } from '../context/context';

const LoginPage = () => {
  const context = useContext(AppContext);
  const { googleSignIn } = context;

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form className="max-w-screen-[1640px]">
        <div className="flex justify-center items-center gap-8 p-20">
          <div className="flex flex-col w-1/2">
            <label htmlFor="name">User Name : </label>
            <input type="text" name="name" />
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" />
          </div>
        </div>
        <button className="block w-2/5 m-auto text-center bg-white text-fontColor font-inter text-[20px] font-semibold capitalize border-2 border-fontColor rounded-lg hover:bg-fontColor hover:text-white duration-500 py-4 my-4 dark:bg-transparent dark:hover:bg-fontColor">
          Sign in
        </button>
      </form>
      <button
        onClick={handleGoogle}
        className="block w-2/5 m-auto text-center bg-white text-fontColor font-inter text-[20px] font-semibold capitalize border-2 border-fontColor rounded-lg hover:bg-fontColor hover:text-white duration-500 py-4 my-4 dark:bg-transparent dark:hover:bg-fontColor"
      >
        Google sign in
      </button>
    </div>
  );
};

export default LoginPage;
