import { Link } from 'react-router-dom';

export default function UnderConstructionPage () {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="text-center">
        <h1 className="text-primary font-bold text-xl">Under construction 🚧</h1>
        <h3 className="text-primary font-bold text-sm">Please come back later</h3>
        <Link to="/">
          <button
            className="text-white font-bold text-sm mt-4 py-2 px-4 rounded bg-primary"
            type="button"
          >
            Return to home page
          </button>
        </Link>
      </div>
    </div>
  );
}
