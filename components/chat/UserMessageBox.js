const UserMessageBox = ({ responseText, time }) => {

    return (
        <div className="w-1/2 pl-4 bg-blue-500 text-white mb-7 pr-4 pt-2 pb-2 rounded-lg shadow-md ml-auto">
            <div className="flex items-center mb-2">
                <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                    alt="Avatar"
                />
                <p className="text-sm font-semibold">Me</p>
            </div>
            <p className="text-sm">{responseText}</p>
            <p className="text-right text-xs">{time}</p>
        </div>
    );
};

export default UserMessageBox;
