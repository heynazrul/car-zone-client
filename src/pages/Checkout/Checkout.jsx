import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PageBanner from '../../components/shared/PageBanner/PageBanner';

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;

  return (
    <div>
      <PageBanner></PageBanner>

      <form>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <input
              type="text"
              placeholder="email"
              name="name"
              className="input-bordered input"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input-bordered input"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input-bordered input"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={'$' + price}
              className="input-bordered input"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Notes</span>
            </label>
            <textarea

              type="text"
              defaultValue={'$' + price}
              className="input-bordered input"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn-primary btn-block btn">Order Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
