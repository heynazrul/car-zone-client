import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';

const Banner = () => {
  return (
    <div className="carousel mt-12 h-[400px] w-full rounded-lg md:h-[500px] lg:h-[600px]">
      <div
        id="slide1"
        className="carousel-item relative w-full ">
        <img
          src={img1}
          className="w-full object-cover object-left-top "
        />
        {/* left-24 right-5 top-1/2  -translate-y-1/2 absolute justify-end*/}
        <div className=" to-[rgba(21, 21, 21, 0)] absolute flex h-full w-full items-center justify-center bg-gradient-to-r from-[#151515]">
          <div className="  flex w-full transform flex-col  space-y-4  px-6   md:absolute  md:left-24 md:right-5 md:top-1/2 md:w-1/3 md:-translate-y-1/2  md:px-0 lg:space-y-8">
            <h2 className="text-3xl font-bold !leading-tight text-gray-200 md:text-4xl lg:text-6xl">
              Affordable <br /> Price For Car Servicing
            </h2>
            <p className="text-gray-400">
              There are many variations of passages of available, but the majority have suffered alteration in some form
            </p>
            <div className="space-x-5">
              <button>
                <Link
                  to={'/appointment'}
                  className=" btn-primary btn-sm btn md:btn-md ">
                  Discover More
                </Link>
              </button>
              <button>
                <Link
                  to={'/appointment'}
                  className="btn-outline btn-primary btn hidden md:inline-flex">
                  Appointment
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 left-5 right-5 flex -translate-y-1/2 transform justify-end space-x-5 ">
          <a
            href="#slide5"
            className="btn-sm btn-circle btn bg-opacity-70 hover:btn-primary lg:btn-md">
            ❮
          </a>
          <a
            href="#slide2"
            className="btn-sm btn-circle btn bg-opacity-70 hover:btn-primary lg:btn-md">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full object-cover object-right-top "
        />

        <div className=" to-[rgba(21, 21, 21, 0)] absolute flex h-full w-full items-center justify-center bg-gradient-to-r from-[#151515]">
          <div className="  flex w-full transform flex-col  space-y-4  px-6   md:absolute  md:left-24 md:right-5 md:top-1/2 md:w-1/3 md:-translate-y-1/2  md:px-0 lg:space-y-8">
            <h2 className="text-3xl font-bold !leading-tight text-gray-200 md:text-4xl lg:text-6xl">
              Affordable <br /> Price For Car Servicing
            </h2>
            <p className="text-gray-400">
              There are many variations of passages of available, but the majority have suffered alteration in some form
            </p>
            <div className="space-x-5">
              <button>
                <Link
                  to={'/appointment'}
                  className=" btn-primary btn-sm btn md:btn-md ">
                  Discover More
                </Link>
              </button>
              <button>
                <Link
                  to={'/appointment'}
                  className="btn-outline btn-primary btn hidden md:inline-flex">
                  Appointment
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 left-5 right-5 flex -translate-y-1/2 transform justify-end space-x-5 ">
          <a
            href="#slide1"
            className="btn-sm btn-circle btn bg-opacity-70 hover:btn-primary lg:btn-md">
            ❮
          </a>
          <a
            href="#slide3"
            className="btn-sm btn-circle btn bg-opacity-70 hover:btn-primary lg:btn-md">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full">
        <img
          src={img3}
          className="w-full object-cover object-left-top "
        />

        <div className=" to-[rgba(21, 21, 21, 0)] absolute flex h-full w-full items-center justify-center bg-gradient-to-r from-[#151515]">
          <div className="  flex w-full transform flex-col  space-y-4  px-6   md:absolute  md:left-24 md:right-5 md:top-1/2 md:w-1/3 md:-translate-y-1/2  md:px-0 lg:space-y-8">
            <h2 className="text-3xl font-bold !leading-tight text-gray-200 md:text-4xl lg:text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-gray-400">
              There are many variations of passages of available, but the majority have suffered alteration in some form
            </p>
            <div className="space-x-5">
              <button>
                <Link
                  to={'/appointment'}
                  className=" btn-primary btn-sm btn md:btn-md ">
                  Discover More
                </Link>
              </button>
              <button>
                <Link
                  to={'/appointment'}
                  className="btn-outline btn-primary btn hidden md:inline-flex">
                  Appointment
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 left-5 right-5 flex -translate-y-1/2 transform justify-end space-x-5 ">
          <a
            href="#slide2"
            className="btn-sm btn-circle btn bg-opacity-70 hover:btn-primary lg:btn-md">
            ❮
          </a>
          <a
            href="#slide4"
            className="btn-sm btn-circle btn bg-opacity-70 hover:btn-primary lg:btn-md">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative w-full">
        <img
          src={img4}
          className="w-full object-cover object-left-top "
        />

        <div className=" to-[rgba(21, 21, 21, 0)] absolute flex h-full w-full items-center justify-center bg-gradient-to-r from-[#151515]">
          <div className="  flex w-full transform flex-col  space-y-4  px-6   md:absolute  md:left-24 md:right-5 md:top-1/2 md:w-1/3 md:-translate-y-1/2  md:px-0 lg:space-y-8">
            <h2 className="text-3xl font-bold !leading-tight text-gray-200 md:text-4xl lg:text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-gray-400">
              There are many variations of passages of available, but the majority have suffered alteration in some form
            </p>
            <div className="space-x-5">
              <button>
                <Link
                  to={'/appointment'}
                  className=" btn-primary btn-sm btn md:btn-md ">
                  Discover More
                </Link>
              </button>
              <button>
                <Link
                  to={'/appointment'}
                  className="btn-outline btn-primary btn hidden md:inline-flex">
                  Appointment
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 left-5 right-5 flex -translate-y-1/2 transform justify-end space-x-5 ">
          <a
            href="#slide3"
            className="btn-sm btn-circle btn bg-opacity-70 hover:btn-primary lg:btn-md">
            ❮
          </a>
          <a
            href="#slide5"
            className="btn-sm btn-circle btn bg-opacity-70 hover:btn-primary lg:btn-md">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide5"
        className="carousel-item relative w-full">
        <img
          src={img5}
          className="w-full object-cover object-center "
        />

        <div className=" to-[rgba(21, 21, 21, 0)] absolute flex h-full w-full items-center justify-center bg-gradient-to-r from-[#151515]">
          <div className="  flex w-full transform flex-col  space-y-4  px-6   md:absolute  md:left-24 md:right-5 md:top-1/2 md:w-1/3 md:-translate-y-1/2  md:px-0 lg:space-y-8">
            <h2 className="text-3xl font-bold !leading-tight text-gray-200 md:text-4xl lg:text-6xl">
              Affordable <br /> Price For Car Servicing
            </h2>
            <p className="text-gray-400">
              There are many variations of passages of available, but the majority have suffered alteration in some form
            </p>
            <div className="space-x-5">
              <button>
                <Link
                  to={'/appointment'}
                  className=" btn-primary btn-sm btn md:btn-md ">
                  Discover More
                </Link>
              </button>
              <button>
                <Link
                  to={'/appointment'}
                  className="btn-outline btn-primary btn hidden md:inline-flex">
                  Appointment
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 left-5 right-5 flex -translate-y-1/2 transform justify-end space-x-5 ">
          <a
            href="#slide4"
            className="btn-sm btn-circle btn bg-opacity-70 hover:btn-primary lg:btn-md">
            ❮
          </a>
          <a
            href="#slide1"
            className="btn-sm btn-circle btn bg-opacity-70 hover:btn-primary lg:btn-md">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
