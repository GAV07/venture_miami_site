import React, { useState } from 'react';
import moment from 'moment';


const EventModal = ({ title, description, time, date, closeModal }) => {

    const formattedTime = `${moment(time).format('LT')} - ${moment(time).endOf('day').format('LT')}`;
    const formattedDate = `${moment(date).format('MMM DD')} - ${moment(date).add(1, 'day').format('MMM DD YYYY')}`;

    const handleCardClick = () => {

        closeModal();
    };

    return (
        <div className="w-1/2 m-auto rounded overflow-hidden shadow-lg" onClick={handleCardClick}>

            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute bg-white rounded shadow-lg p-4">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-700 text-base mb-4">{description}</p>
                    <p className="text-gray-600 text-sm">
                        Time: {formattedTime}
                    </p>
                    <p className="text-gray-600 text-sm">
                        Date: {formattedDate}
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                        Register
                    </button>
                </div>
            </div>

        </div>
    );
};

export default EventModal;
