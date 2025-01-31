import React from "react";

const ViewWidget = ({ theme, content, setViewVisible }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white px-8 py-12 sm:py-4 rounded shadow-lg h-screen w-screen sm:h-fit sm:w-5/6 md:w-4/5 xl:w-3/4 2xl:w-2/3 flex flex-col relative">
        <button
          className="rotate-45 absolute top-7 sm:top-0 right-1 text-4xl font-light duration-300 sm:opacity-50 hover:opacity-100"
          onClick={() => setViewVisible(false)}
        >
          +
        </button>

        <h1 className="w-full p-2 mb-4 text-2xl">{theme}</h1>

        <div className="flex-1 flex flex-col">
          <textarea
            value={content}
            readOnly
            className="w-full flex-1 min-h-56 resize-none py-2 px-4 mb-10 border-2 rounded transition-colors duration-200 focus:border-gray-500 focus:outline-none"
          ></textarea>
        </div>

        <div className="flex justify-center mb-5">
          <button
            className="px-4 py-2 text-white rounded duration-300 bg-red-500 hover:bg-red-600 active:scale-90"
            onClick={() => setViewVisible(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewWidget;
