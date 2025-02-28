import React from "react";
import Image from "next/image";
import { CharacterType } from "../../types/character";
import { Button } from "react-bootstrap";

export const CharacterCard: React.FC<
  Omit<CharacterType, "id" | "origin" | "url" | "created">
> = ({ name, image, status, species, type, gender, location, episode }) => {
  console.log("image", image);
  return (
    <div className="bg-gray-800  p-4 rounded-2xl shadow-lg flex flex-col items-center border-primary-400/20">
      <div className=" w-[500px] relative aspect-square">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-sm text-gray-300">
        🟢 {status} - {species}
      </p>
      {type && <p className="text-sm text-accent-400">🔹 {type}</p>}
      <p className="text-sm">{gender}</p>
      <p className="text-sm  mt-2">
        📍<span className="text-slate-500 ">Location:</span> {location.name}
      </p>
      <p className="text-sm  mt-2">
        <span className="text-slate-500 ">Episodes: </span>
        Appeared in {episode.length} episodes
      </p>
      <Button variant="primary" className="mt-4">
        View Details
      </Button>
    </div>
  );
};
