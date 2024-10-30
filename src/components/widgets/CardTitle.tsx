import React from "react";

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="block">
      <span className="text-base font-semibold">{children}</span>
    </div>
  );
};

export default CardTitle;
