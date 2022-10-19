export default function Porfile () {
  return (
    <div className="absolute inset-x-0 bottom-80 m-8">
      <h1 className="text-center text-5xl text-violet-900 font-roboto p-3" >
        Jain, 19
      </h1>
      <h2 className="text-center text-s text-violet-900 font-roboto uppercase p-2 font-bold">
        from San francisco, ca
      </h2>
      <h2 className="text-center text-s text-teal-800 font-roboto uppercase font-bold">
        in quito, ecu
      </h2>
      <div className="grid gap-4 grid-cols-4 bg-violet-900 text-center
       hover:bg-violet-300 text-white py-2 px-2">
        <h1>
          wine
        </h1>
        <h1>
          rock
        </h1>
        <h1>
          fairytale
        </h1>
        <h1>
          italian
        </h1>

      </div>
    </div>

  );
}
