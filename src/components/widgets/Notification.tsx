import React from "react";

const Notification = () => {
  return (
    <div className="space-y-4">
      {['one', 'two', 'three'].map((item) => (
        <div
          key={item}
          className="flex items-center justify-between py-3 border-b"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
            <div>
              <p className="font-medium">Notification {item}</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">View</button>
        </div>
      ))}
    </div>
  );
};

export default Notification;
