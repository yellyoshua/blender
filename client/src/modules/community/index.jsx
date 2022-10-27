import {HiMagnifyingGlass} from 'react-icons/hi2';

export default function Community () {
  return (
    <div className="m-8" style={{paddingBottom: 65}}>
      <h1 className="text-center text-2xl text-primary font-roboto p-3 font-bold" >
        Matching communities?
      </h1>
      <div className="flex justify-center items-center">
        <input
          className="w-full border-2 border-primary rounded-lg p-2"
          type="text"
          placeholder="Search by your own"
        />
        <button
          className="bg-primary text-white text-sm font-bold py-2 px-2 ml-2 rounded mx-auto block"
        >
          <HiMagnifyingGlass className="inline-block w-7 h-7" />
        </button>
      </div>
    </div>
  );
}
