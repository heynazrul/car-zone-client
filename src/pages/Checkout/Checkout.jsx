import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import PageBanner from '../../components/shared/PageBanner/PageBanner';
import { AuthContext } from '../../providers/AuthProvider';

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;
  console.log(service);

  const { user } = useContext(AuthContext);

  const handleAppointment = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const notes = form.notes.value;

    const appointments = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price: price,
      notes: notes,
    };

    fetch('http://localhost:5000/appointments', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(appointments)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            alert('Appointment Booked!')
        }
      });
    
  };

  return (
    <div>
      <PageBanner></PageBanner>

      <form onSubmit={handleAppointment}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              defaultValue={user?.displayname}
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
              defaultValue={user?.email}
              className="input-bordered input"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              readOnly
              defaultValue={'$' + price}
              className="input-bordered input"
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Notes</span>
            </label>
            <textarea
              placeholder="write your instructions"
              type="text"
              name="notes"
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
