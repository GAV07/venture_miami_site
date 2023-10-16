
const urls = [
    "https://images.unsplash.com/photo-1692982926792-fe6495261ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1693041186977-dc5820aa95ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1693065218141-1dde7fae63b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1692891259833-9832c3ca751e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=6",
];

export default function InfiniteSlider(){
    return (
        <div className="w-[200%] h-[500px] bg-red-100 border-t border-b border-gray-600 relative">

            <div className="w-[200%] absolute left-0 h-full flex flex-col items-start justify-start bg-green-100 gap-y-9 animate-infinite-slider">

                <div className="flex justify-start items-end w-max h-max gap-x-4 bg-blue-100 gap-x-9">

                    <div className="w-[400px] h-[300px]">
                        <img
                            src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                            alt=""
                            className="aspect-[4/3] w-full max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>

                    <div className="w-[600px] h-[430px]">
                        <img
                            src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                            alt=""
                            className="aspect-[4/3] w-full max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>


                    {/*copy*/}
                    <div className="w-[400px] h-[300px]">
                        <img
                            src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                            alt=""
                            className="aspect-[4/3] w-full max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>

                    <div className="w-[600px] h-[430px]">
                        <img
                            src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                            alt=""
                            className="aspect-[4/3] w-full max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>

                </div>


{/*

                <div className="flex justify-start items-start w-max bg-yellow-100 gap-x-9">

                    <div className="w-[600px] h-[430px]">
                        <img
                            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                            alt=""
                            className="aspect-[4/3] w-full max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>

                    <div className="w-[400px] h-[300px]">
                        <img
                            src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                            alt=""
                            className="aspect-[4/3] w-full max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>

                    copy

                    <div className="w-[600px] h-[430px]">
                        <img
                            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                            alt=""
                            className="aspect-[4/3] w-full max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>

                    <div className="w-[400px] h-[300px]">
                        <img
                            src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                            alt=""
                            className="aspect-[4/3] w-full max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>

                </div>
*/}




            </div>
        </div>
    );
};
