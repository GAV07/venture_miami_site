import React from 'react';

export default function ContactForm({ closeModal }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Close the modal after form submission
        // Form logic can be implemented later (i.e, sending to server/form validation )
        closeModal();
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <div className="mt-1">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <div className="mt-1">
            <textarea
                id="message"
                name="message"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                placeholder="Your message..."
                rows={4}
                required
            ></textarea>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
