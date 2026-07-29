import React from "react";
import { Mail, Phone, User, MapPin } from "lucide-react";

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-28 relative">
        <div className="absolute left-1/2 -bottom-12 -translate-x-1/2">
          <div className="w-24 h-24 rounded-full bg-white border-4 border-white flex items-center justify-center shadow-lg">
            <User size={45} className="text-blue-600" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="pt-16 p-6 text-center">
        <h2 className="text-2xl font-bold capitalize">
          {user.name.firstname} {user.name.lastname}
        </h2>

        <p className="text-gray-500">@{user.username}</p>

        {/* Information */}
        <div className="mt-6 space-y-4 text-left">

          <div className="flex items-center gap-3">
            <Mail className="text-blue-500" size={20} />
            <span className="text-gray-700">{user.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-green-500" size={20} />
            <span className="text-gray-700">{user.phone}</span>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="text-red-500 mt-1" size={20} />
            <div className="text-gray-700">
              <p className="capitalize">
                {user.address.number}, {user.address.street}
              </p>
              <p className="capitalize">{user.address.city}</p>
              <p>{user.address.zipcode}</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-between items-center border-t pt-4">
          <div>
            <p className="text-xs text-gray-500">User ID</p>
            <p className="font-semibold">#{user.id}</p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;