import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="mx-auto w-1/2 space-y-5  text-center">
        <h2 className="text-xl font-bold text-primary">Service</h2>
        <h3 className="text-4xl font-bold lg:text-5xl">Our Service Area</h3>
        <p className="leading-relaxed">
          The majority have suffered alteration in some form, by injected humour, or randomised words which dont look
          even slightly believable.{' '}
        </p>
      </div>
      <div className="mt-12 grid gap-6 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}></ServiceCard>
        ))}
      </div>
      <button className="btn-outline btn-primary btn rounded-none mt-12">
        <Link  to={'/appointment'}>More Services</Link>
      </button>
    </div>
  );
};

export default Services;
