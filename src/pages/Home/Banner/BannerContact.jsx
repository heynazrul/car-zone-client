import calendar from '../../../assets/icons/calendar.svg'
import phone from '../../../assets/icons/phone.svg'
import map from '../../../assets/icons/map.svg'
const BannerContact = () => {
    return (
      <div className="flex px-4 sm:px-16 py-20 items-center justify-center gap-16 bg-neutral  flex-wrap mt-24 text-gray-100">
        <div className="flex items-center gap-5 ">
          <img
            src={calendar}
            alt=""
          />
          <div className="space-y-2">
            <p className="font-medium">We are open monday-friday</p>
            <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img
            src={phone}
            alt=""
          />
          <div className="space-y-2">
            <p className="font-medium">Have a question?</p>
            <h2 className="text-2xl font-bold">+2546 251 2658</h2>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img
            src={map}
            alt=""
          />
          <div className="space-y-2">
            <p className="font-medium ">Need a repair? our address</p>
            <h2 className="text-2xl font-bold">Liza Street, New York</h2>
          </div>
        </div>
      </div>
    );
};

export default BannerContact;