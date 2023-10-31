import { Link, useRouteError } from 'react-router-dom';

export default function ErrorBoundaryPage () {
  const error = useRouteError();
  console.error('error :', error);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="text-center">
        <h1 className="text-primary font-bold text-xl">
          Oops, something went wrong
        </h1>
        <h3 className="text-primary font-bold text-sm">
          Please try again later
        </h3>
        <Link to="/">
          <button
            className="text-white font-bold text-sm mt-4 py-2 px-4 rounded bg-primary"
            type="button"
          >
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
}
