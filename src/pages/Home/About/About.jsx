import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero mt-12 min-h-screen ">
      <div className="hero-content flex-col p-0 lg:flex-row ">
        <div className="relative h-full lg:w-1/2">
          <img
            src={person}
            className="w-5/6 rounded-lg object-cover shadow-lg"
          />
          <img
            src={parts}
            className="absolute right-12 top-1/2 w-3/5 rounded-lg border-8 border-white object-fill"
          />
        </div>
        <div className=" lg:w-1/2">
          <p className="font-bold text-primary text-xl pb-2">About Us</p>
          <h2 className="w-2/3 text-5xl font-bold leading-tight">We are qualified & of experience in this field</h2>
          <p className="w-4/5 py-4">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which dont look even slightly believable.
          </p>
          <p className="w-4/5 pb-4">
            the majority have suffered alteration in some form, by injected humour, or randomised words which dont look
            even slightly believable.
          </p>
          <button className="btn-primary btn">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
