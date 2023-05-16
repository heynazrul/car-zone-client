import { useContext } from 'react';
import login from '../../assets/images/login/login.svg';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;

        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const loggedUser = {
          email: user.email,
        };
        console.log(user);
        alert('login Success');
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content  flex-col justify-between gap-8 lg:flex-row">
        <div className="  mr-14 w-1/2">
          <img
            src={login}
            alt=""
            className=""
          />
        </div>
        <div className="card w-full max-w-sm flex-shrink-0  border border-gray-400 border-opacity-40 bg-base-100 p-8 shadow-md lg:max-w-lg lg:p-16">
          {/* <div className="card border border-gray-200 bg-base-100 p-8 shadow-lg"> */}
          <div className="card-body p-0">
            <h1 className="mb-12 text-center text-3xl font-bold lg:text-5xl">Login</h1>

            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input-bordered input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input-bordered input"
                />
                <label className="label">
                  <a
                    href="#"
                    className="link-hover label-text-alt link">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn-primary btn text-white"
                  value="Sign In"
                />
              </div>
            </form>
            {/* button group */}
            <p className="my-6 text-center">Or sign in with</p>
            <div className="space-x-4 text-center">
              <button className="btn-circle btn border-none bg-gray-200 hover:bg-gray-300">
                <FaFacebookF
                  className="text-blue-600 "
                  size={24}></FaFacebookF>
              </button>
              <button className="btn-circle btn border-none bg-gray-200 hover:bg-gray-300 ">
                <FaGithub
                  className="text-gray-900  "
                  size={24}></FaGithub>
              </button>
              <button
                onClick={handleGoogleLogin}
                className="btn-circle btn border-none bg-gray-200 hover:bg-gray-300 ">
                <FcGoogle
                  className="text-blue-600"
                  size={24}></FcGoogle>
              </button>
            </div>
            <p className="mt-6 text-center">
              New to Car Zone?{' '}
              <Link
                to={'/register'}
                className="font-bold text-primary">
                Register
              </Link>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
