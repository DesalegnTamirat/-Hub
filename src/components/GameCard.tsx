import type { Game } from "../hooks/useGames";
import placeholderPhoto from "../assets/no-image-placeholder.webp";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <div className="card w-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-accent-content/50">
      <figure className="relative pt-[56.25%] overflow-hidden rounded-t-lg">
        {" "}
        {/* 16:9 aspect ratio */}
        <img
          src={game.background_image || placeholderPhoto}
          alt={game.name}
          className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </figure>
      <div className="card-body p-5 md:p-6">
        <h2 className="card-title text-xl md:text-2xl line-clamp-2 min-h-[3.5rem]">
          {game.name}
        </h2>

        {/* Game details section */}
        <div className="flex flex-wrap gap-3 text-sm mb-4">
          {game.rating && (
            <div className="badge badge-primary gap-1">
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
          {game.released && (
            <div className="badge badge-outline">
              {new Date(game.released).getFullYear()}
            </div>
          )}
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm w-full bg-base-200 hover:bg-base-300 border-base-300 text-base-content">
            Buy Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
