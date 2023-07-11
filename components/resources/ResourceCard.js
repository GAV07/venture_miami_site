import React from 'react';

const ResourceCard = ({ resource }) => {
    const { title, description, category, url, file  } = resource;

    // Define the category color mapping
    const categoryColors = {
        'Business and Entrepreneurship': 'bg-blue-500',
        'Education and Learning': 'bg-green-500',
        'Health and Wellness': 'bg-purple-500',
        'Arts and Culture': 'bg-yellow-500',
        'Recreation and Tourism': 'bg-red-500',
        'Government': 'bg-black',
        'Travel and Transportation': 'bg-orange-500',

    };



    // Get the background color class based on the category
    const bgColorClass = categoryColors[category] || 'bg-gray-500';

    return (
        <div className={`w-4/5 m-auto bg-white rounded-lg shadow-lg p-6 md:[500px]`}>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <p className="text-gray-700 mb-2">Category: <span className={`${bgColorClass} text-white p-1 text-xs rounded font-bold tracking-wider`}>{category}</span></p>
            <a
                href={url || file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                download
            >
                {`${url ? 'Visit' : 'Download'}`}
            </a>
        </div>
    );
};

export default ResourceCard;
