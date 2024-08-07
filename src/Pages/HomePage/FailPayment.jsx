import React from 'react';
import { Link } from 'react-router-dom';

const FailPayment = () => {
    return (
        <div>
      <div className="w-full mx-auto text-center mt-[10%] space-y-3">
        <p className="text-2xl font-semibold text-black mb-3">Payment Fail</p>
        <Link to='/'>
          <button className="btn btn-sm btn-accent text-white border-none">
            Home page
          </button>
        </Link>
      </div>
    </div>
    );
};

export default FailPayment;