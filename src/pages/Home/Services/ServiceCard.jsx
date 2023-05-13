/* eslint-disable react/prop-types */
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {
    const {title, img, price, _id} = service;
    return (
      <div className="card mx-auto w-72 bg-base-200  bg-opacity-30 shadow-md md:w-96 ">
        <div className="px-6 pt-6 ">
          <img
            src={img}
            alt="Shoes"
            className="h-52 w-full rounded-md object-cover object-center"
          />
        </div>
        <div className="card-body ">
          <h2 className="card-title text-2xl">{title}</h2>
          <div className="flex items-center ">
            <p className="text-lg font-semibold text-primary">
              Price: <span>{price}</span>
            </p>
            <Link to={`/checkout/${_id}`} className="btn-link btn p-0">
              <HiOutlineArrowRight size={24}></HiOutlineArrowRight>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;