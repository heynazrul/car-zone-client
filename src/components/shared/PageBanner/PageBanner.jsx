import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageBanner = () => {
     const location = useLocation();
     console.log(location.pathname.split('/')[1]);
     const [pageTitle, setPageTitle] = useState('');
     
     useEffect(() => {
        if (location.pathname.includes('service-details')) {
           setPageTitle('Service Details');
        }
        if (location.pathname.includes('checkout')) {
           setPageTitle('Check Out');
        }
        if (location.pathname.includes('add-new-service')) {
           setPageTitle('Add New Service');
        }
     },[location])
  return (
    <div className="relative mt-12 h-72 w-full rounded-lg border  bg-[url('https://i.ibb.co/GpxkQGT/bannerBG.jpg')] bg-cover bg-center">
      <div className="to-[rgba(21, 21, 21, 0)] absolute flex h-full w-full items-center justify-center bg-gradient-to-r from-[#151515] lg:justify-start">
        <h2 className="text-3xl font-bold text-gray-100 lg:ml-24 lg:text-5xl ">{pageTitle}</h2>
      </div>
      <div className="absolute bottom-0 left-[25%] rounded-t-xl bg-primary px-12 py-3 sm:left-[35%] lg:left-[40%]">
        <p className="text-center font-semibold text-gray-100">Home/{location.pathname.split('/')[1]}</p>
      </div>
    </div>
  );
};

export default PageBanner;
