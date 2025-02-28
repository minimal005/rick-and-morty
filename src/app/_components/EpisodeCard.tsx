import React from "react";

interface EpisodeCardProps {
  name: string;
  episode: string;
  airDate: string;
  charactersCount: number;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({
  name,
  episode,
  airDate,
  charactersCount,
}) => {
  return (
    <div className="bg-gray-800 w-80 p-4 rounded-xl shadow-md border-1 border-primary-400/20">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-300">🎬 {episode}</p>
      <p className="text-gray-400 text-sm">📅 {airDate}</p>
      <p className="text-gray-400 text-sm">👥 {charactersCount} characters</p>
    </div>
  );
};

export default EpisodeCard;
