import { Link } from 'react-router-dom';

export default function EmptyDiscover ({refresh}) {
  return (
    <div className="h-screen flex justify-center items-center mx-auto">
      <div>
        <h1 className="text-center text-3xl text-primary font-roboto p-3" >
          !Oops
        </h1>
        <img
          src="/illustrations/undraw_well_done.svg"
          alt="empty discover"
          className="mx-auto w-64 select-none pointer-events-none"
        />
        <h2 className="text-center text-sm text-primary font-roboto uppercase p-2 font-bold">
          We couldn&apos;t find any matches for you
        </h2>

        <h2 className="text-center text-sm text-teal-800 font-roboto uppercase font-bold">
          Try again later
        </h2>
        <Link to="/community">
          <button
            className="bg-primary text-white font-bold py-2 px-4 rounded mt-4 mx-auto block"
            type="button"
            onClick={refresh}
          >
            Visit Community
          </button>
        </Link>
        <button
          className="text-primary font-bold text-sm py-1 px-4 rounded mt-1 mx-auto block"
          type="button"
          onClick={refresh}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
