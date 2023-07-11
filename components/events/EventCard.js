import React from 'react';
import moment from 'moment';

const EventCard = ({ title, date, time }) => {
    const formattedTime = `${moment(time).format('LT')} - ${moment(time).endOf('day').format('LT')}`;
    const formattedDate = `${moment(date).format('MMM DD')} - ${moment(date).add(1, 'day').format('MMM DD YYYY')}`;

    return (
        <div className="w-full m-auto bg-white rounded-lg shadow-l">
            <div className="px-6 py-4">
                <div className="text-center font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base mb-4">{formattedDate}</p>
                <p className="text-gray-600 text-sm">
                   {formattedTime}
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                    Register
                </button>
            </div>
        </div>
    );
};

export default EventCard;
