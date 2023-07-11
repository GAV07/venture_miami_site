import React from 'react';

const ChatNavbar = () => {
    return (
        <nav className="bg-gray-800 rounded-t-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <p className="text-white text-xl font-bold">Live Chat</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default ChatNavbar;
