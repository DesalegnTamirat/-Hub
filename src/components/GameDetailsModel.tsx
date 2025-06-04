import { useEffect, useRef, useState } from "react";
import type { Game } from "../hooks/useGames";
import Platform from "./PlatformMapping";
import placeholderImage from "../assets/no-image-placeholder.webp";

interface Props {
  game: Game;
  onClose: () => void;
}

export default function GameDetailsModal({ game, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [showImageZoom, setShowImageZoom] = useState(false);

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showImageZoom) setShowImageZoom(false);
        else onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, showImageZoom]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Backdrop with blur effect */}
      <div className="fixed inset-0 bg-black/70 dark:bg-black/70 backdrop-blur-sm z-40"></div>
      
      {/* Main Modal container */}
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <div 
          ref={modalRef}
          className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 animate-fadeIn"
        >
          {/* Game cover image */}
          <div 
            className="relative h-64 md:h-96 w-full cursor-zoom-in group"
            onClick={() => setShowImageZoom(true)}
          >
            <img
              src={game.background_image || placeholderImage}
              alt={game.name}
              className="w-full h-full object-cover bg-black"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 dark:from-black/90 via-black/40 dark:via-black/50 to-transparent"></div>
            
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-4 right-4 btn btn-circle btn-sm btn-ghost text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Game title overlay */}
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                {game.name}
              </h1>
              {game.released && (
                <p className="text-gray-200 dark:text-gray-300 mt-2">
                  Released: {formatDate(game.released)}
                </p>
              )}
            </div>

            {/* Click to zoom hint */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Click to zoom
            </div>
          </div>

          {/* Game details content */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Rating and info section */}
            <div className="flex flex-wrap items-center gap-4">
              {game.rating && (
                <div 
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800/80 px-4 py-2 rounded-full border border-yellow-400/30 dark:border-yellow-500/30 cursor-pointer hover:bg-yellow-100 dark:hover:bg-yellow-500/20 transition-colors"
                  onClick={() => alert(`User rating: ${game.rating.toFixed(1)}`)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 dark:text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-800 dark:text-white font-medium">
                    {game.rating.toFixed(1)}/{game.rating_top || 5}
                  </span>
                </div>
              )}

              {game.metacritic && (
                <div 
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800/80 px-4 py-2 rounded-full border border-blue-400/30 dark:border-blue-500/30 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors"
                  onClick={() => window.open(`https://www.metacritic.com/search/game/${game.name}/results`, '_blank')}
                >
                  <span className="text-blue-600 dark:text-blue-400 font-bold">M</span>
                  <span className="text-gray-800 dark:text-white font-medium">
                    {game.metacritic}
                  </span>
                </div>
              )}

              {game.esrb_rating && (
                <div 
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800/80 px-4 py-2 rounded-full border border-purple-400/30 dark:border-purple-500/30 cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-500/20 transition-colors"
                  onClick={() => window.open('https://www.esrb.org/ratings-guide/', '_blank')}
                >
                  <span className="text-purple-600 dark:text-purple-400 font-bold">ESRB</span>
                  <span className="text-gray-800 dark:text-white font-medium">
                    {game.esrb_rating.name}
                  </span>
                </div>
              )}
            </div>

            {/* Platforms section */}
            {game.platforms && game.platforms.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Platforms</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {game.platforms.map(({ platform }) => (
                    <div 
                      key={platform.id} 
                      className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                      onClick={() => alert(`Platform: ${platform.name}`)}
                    >
                      <Platform name={platform.name} />
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">{platform.name}</p>
                        {platform.requirements?.minimum && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Min: {platform.requirements.minimum}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {game.playtime > 0 && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Average Playtime</h3>
                  <p className="text-gray-700 dark:text-gray-300">{game.playtime} hours</p>
                </div>
              )}

              {game.updated && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Last Updated</h3>
                  <p className="text-gray-700 dark:text-gray-300">{formatDate(game.updated)}</p>
                </div>
              )}

              {game.suggestions_count > 0 && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Community Suggestions</h3>
                  <p className="text-gray-700 dark:text-gray-300">{game.suggestions_count.toLocaleString()}</p>
                </div>
              )}

              {game.added > 0 && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Added by Users</h3>
                  <p className="text-gray-700 dark:text-gray-300">{game.added.toLocaleString()}</p>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button 
                className="btn btn-primary px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 border-none hover:opacity-90 transition-opacity text-white"
                onClick={() => alert('Added to wishlist!')}
              >
                Add to Wishlist
              </button>
              <button 
                className="btn btn-outline px-6 py-3 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors text-gray-800 dark:text-gray-200"
                onClick={() => alert('Finding similar games...')}
              >
                View Similar Games
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {showImageZoom && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 dark:bg-black/90 cursor-zoom-out"
          onClick={() => setShowImageZoom(false)}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={game.background_image || placeholderImage}
              alt={game.name}
              className="max-w-full max-h-full object-cover"
            />
            
            {/* Close zoom button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowImageZoom(false);
              }}
              className="absolute top-4 right-4 btn btn-circle btn-sm btn-ghost text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all"
              aria-label="Close zoom"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Download button */}
            {game.background_image && (
              <a
                href={game.background_image}
                download={`${game.name}-cover.jpg`}
                className="absolute bottom-4 right-4 btn btn-sm btn-primary gap-2 text-white"
                onClick={e => e.stopPropagation()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </a>
            )}
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}