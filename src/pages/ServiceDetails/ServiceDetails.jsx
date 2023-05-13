import React, { useState } from 'react';
import PageBanner from '../../components/shared/PageBanner/PageBanner';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { BsJournalArrowDown } from 'react-icons/bs';
import { RiBookletLine } from 'react-icons/ri';

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  const { _id, description, title, img, price, facility } = service;
  return (
    <div>
      <PageBanner></PageBanner>
      <div className="my-24 grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-8 px-4">

            <img
              src={img}
              className='w-full rounded-md'
              alt=""
            />
         
          <h2 className="pt-4 text-2xl font-bold lg:text-4xl ">{title}</h2>
          <p className="text-gray-500">{description}</p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {facility.map((item, idx) => (
              <div
                key={idx}
                className="space-y-3 rounded-lg border-t-2 border-primary bg-gray-100 bg-opacity-70 p-10">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.details}</p>
              </div>
            ))}
          </div>

          <h2 className="pt-4 text-2xl font-bold lg:text-4xl ">3 Simple Steps to Process</h2>
          <p className="text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which do not look even slightly believable. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the
            middle of text
          </p>
          <div className="flex gap-6 ">
            <div className="border border-gray-200 p-8 text-center">
              <p>
                <span className=" rounded-full border-8 border-red-200 bg-primary p-3 font-bold text-white">01</span>
              </p>
              <h2 className="mb-5 mt-8 font-bold ">STEP ONE</h2>
              <p className="text-gray-500">It uses a dictionary of over 200 .</p>
            </div>
            <div className="border border-gray-200 p-8 text-center">
              <p>
                <span className=" rounded-full border-8 border-red-200 bg-primary p-3 font-bold text-white">02</span>
              </p>
              <h2 className="mb-5 mt-8 font-bold ">STEP TWO</h2>
              <p className="text-gray-500">It uses a dictionary of over 200 .</p>
            </div>
            <div className="border border-gray-200 p-8 text-center">
              <p>
                <span className=" rounded-full border-8 border-red-200 bg-primary p-3 font-bold text-white">03</span>
              </p>
              <h2 className="mb-5 mt-8 font-bold ">STEP THREE</h2>
              <p className="text-gray-500">It uses a dictionary of over 200 .</p>
            </div>
          </div>
        </div>

        {/* right sidebar */}
        <div>
          {/* Services */}
          <div className="rounded-lg bg-gray-200 p-10">
            <h2 className="mb-5 text-2xl font-bold">Services</h2>
            {facility.map((item, idx) => (
              <div
                key={idx}
                className="mb-5 flex justify-between rounded-lg bg-white p-4 hover:bg-primary hover:text-white">
                <p className=" font-semibold  "> {item.name} </p>
                <HiOutlineArrowRight
                  className="block text-primary hover:text-white"
                  size={24}></HiOutlineArrowRight>
              </div>
            ))}
          </div>
          {/* Download section */}
          <div className="space-y-5 bg-[#151515] p-10">
            <div className="flex justify-between ">
              <div className="flex items-center gap-4">
                <RiBookletLine
                  className="text-white"
                  size={24}></RiBookletLine>
                <div>
                  <p className="font-semibold text-white">Company Details</p>
                  <p className="text-gray-400">Download</p>
                </div>
              </div>
              <button className="btn-primary btn">
                <HiOutlineArrowRight
                  className=""
                  size={24}></HiOutlineArrowRight>
              </button>
            </div>
            <div className="flex justify-between ">
              <div className="flex items-center gap-4">
                <BsJournalArrowDown
                  className="text-white"
                  size={24}></BsJournalArrowDown>
                <div>
                  <p className="font-semibold text-white">Our Brochure</p>
                  <p className="text-gray-400">Download</p>
                </div>
              </div>
              <button className="btn-primary btn">
                <HiOutlineArrowRight
                  className=""
                  size={24}></HiOutlineArrowRight>
              </button>
            </div>
          </div>

          {/* Price checkout */}
          <div className='space-y-6 mt-8'>
            <h2 className="text-2xl font-bold lg:text-4xl">Price: ${price}</h2>
            <Link
              to={`/checkout/${_id}`}
              className="btn-primary btn-block btn">
              Proceed Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
