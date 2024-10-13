import Image from "next/image";
import React from "react";

const notifications = [
  {
    id: 1,
    message: "Order Cancelled: Order 315600",
    description: "Client requested something else",
    type: "error",
  },
  {
    id: 2,
    message: "Order Picked Up",
    description: "Order on the way",
    type: "info",
  },
  {
    id: 3,
    message: "Cash Withdrawal",
    description: "You just withdrew 120000XAF",
    type: "success",
  },
  {
    id: 4,
    message: "Cash Deposit",
    description: "You received 85000XAF",
    type: "success",
  },
  {
    id: 5,
    message: "Cash Deposit",
    description: "You received 85000XAF",
    type: "success",
  },
  {
    id: 6,
    message: "Cash Deposit",
    description: "You received 85000XAF",
    type: "success",
  },
  {
    id: 7,
    message: "Cash Deposit",
    description: "You received 85000XAF",
    type: "success",
  },
  {
    id: 8,
    message: "Cash Deposit",
    description: "You received 85000XAF",
    type: "success",
  },
];

const Notifications: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-1/4">
      <h3 className="text-lg font-semibold mb-4">Notifications</h3>
      <div className="space-y-4 overflow-y-auto max-h-72">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start space-x-2">
            <Image
              src="/images/profile.svg"
              alt="profile"
              width={60}
              height={60}
            />
            <div>
              <p className="font-bold">{notification.message}</p>
              <p className="text-sm text-gray-600">
                {notification.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
