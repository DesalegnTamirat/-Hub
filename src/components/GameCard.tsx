import type { Game } from "../hooks/useGames";
import placeholderPhoto from "../assets/no-image-placeholder.webp";
import Platform from "./Platform";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
      {/* Image with gradient overlay */}
      <figure className="relative pt-[56.25%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </figure>

      <div className="card-body p-4 md:p-5 relative">
        {/* Rating badge */}
        {game.rating && (
          <div className="absolute -top-5 right-4 badge badge-primary gap-1 shadow-lg border-2 border-white dark:border-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {game.rating.toFixed(1)}
          </div>
        )}

        {/* Platforms */}
        <div className="flex gap-2 mb-1">
          {game.parent_platforms.map(({ platform: { name, slug } }) => (
            <span
              key={name}
              className="tooltip tooltip-bottom tooltip-primary"
              data-tip={slug}
            >
              <Platform name={name} />
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="card-title text-xl md:text-2xl font-bold line-clamp-2 min-h-[2.5rem] text-gray-900 dark:text-white">
          {game.name}
        </h2>

        {/* Game details */}
        <div className="flex flex-wrap items-center gap-2 mt-2 text-sm">
          {game.released && (
            <div className="badge badge-ghost">
              {new Date(game.released).getFullYear()}
            </div>
          )}
          <CriticScore score={game.metacritic} />
        </div>

        {/* Action button */}
        <div className="card-actions mt-4">
          <button className="btn btn-primary btn-block btn-sm bg-gradient-to-r from-primary to-secondary border-none text-white hover:opacity-90 transition-opacity">
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
