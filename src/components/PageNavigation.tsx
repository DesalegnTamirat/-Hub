interface Props {
  nextEndPoint: string | null | undefined;
  prevEndPoint: string | null | undefined;
  onHandleEndPoint: (endPoint: string) => void;
}

export default function PageNavigation({
  nextEndPoint,
  prevEndPoint,
  onHandleEndPoint,
}: Props) {
  return (
    <div className="flex justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-16 py-3 pb-10">
      <button
        disabled={!prevEndPoint}
        className="
          btn btn-lg flex items-center gap-2 px-6 text-xl
          bg-blue-700 text-white
          hover:bg-blue-400
          hover:text-gray-900
          dark:bg-blue-400 dark:text-gray-900
          dark:hover:bg-blue-500 dark:hover:text-white
          transition-colors duration-300
        "
        onClick={() => {
          if (prevEndPoint)
            onHandleEndPoint(prevEndPoint)}}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Prev
      </button>
      <button
        disabled={!nextEndPoint}
        onClick={() => {
          if (nextEndPoint)
            onHandleEndPoint(nextEndPoint)}}
        className="
          btn btn-lg flex items-center gap-2 px-6 text-xl
          bg-blue-700 text-white
          hover:bg-blue-400
          hover:text-gray-900
          dark:bg-blue-400 dark:text-gray-900
          dark:hover:bg-blue-500 dark:hover:text-white
          transition-colors duration-300
        "
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
