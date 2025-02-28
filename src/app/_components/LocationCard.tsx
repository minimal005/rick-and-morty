import React from "react";

interface LocationCardProps {
  name: string;
  type: string;
  dimension: string;
  residentsCount: number;
}

const LocationCard: React.FC<LocationCardProps> = ({
  name,
  type,
  dimension,
  residentsCount,
}) => {
  return (
    <div className="bg-gray-800 w-80 p-4 rounded-lg shadow-md border-1 border-primary-400/20 ">
      <h2 className="text-xl font-bold ">{name}</h2>
      <p>📌 {type}</p>
      <p>🌌 {dimension}</p>
      <p>👥 {residentsCount} residents</p>
    </div>
  );
};

export default LocationCard;
