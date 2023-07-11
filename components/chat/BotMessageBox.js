import React from 'react';

const BotMessageBox = ({ responseText, places, time }) => {


    return (
        <div className="w-1/2 pl-4 pr-4 pt-2 pb-2 mb-7 rounded-lg shadow-md mr-auto">
            <div className="flex items-center mb-2">
                <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                    alt="Avatar"
                />
                <p className="text-sm font-semibold">Mimi</p>
            </div>
            <p className="text-sm mb-3">{responseText}</p>
            <div className="flexColumn justify-center items-center">
                {places.map((place, index) => (
                    <div key={index} className="mb-10">
                        <a
                            href={place.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 font-bold text-sm"
                        >
                            <p className="text-center">{place.name}</p>
                        </a>
                        <p className="text-sm">{place.description}</p>
                        <a
                            href={`https://www.google.com/maps/place/${place.address.replace(/ /g, '+')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 text-sm"
                        >
                            <p className="text-center">{place.address}</p>
                        </a>
                    </div>
                ))}
            </div>
            <p className="text-right text-xs">{time}</p>
        </div>
    );
};

export default BotMessageBox;
