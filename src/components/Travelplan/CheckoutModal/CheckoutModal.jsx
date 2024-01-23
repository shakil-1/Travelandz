import React from 'react';
import Checkout from '../Checkout/Checkout';

const CheckoutModal = ({ isOpen, onClose }) => {
    return (
    <div className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'} h-screen w-full flex justify-center items-center bg-gray-800 bg-opacity-75`}>
      <div className="bg-white p-4 rounded-md">
        <button className="float-right text-xl" onClick={onClose}>
        <Checkout/>
        </button>
      
      </div>
    </div>
    );
};

export default CheckoutModal;