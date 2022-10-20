import { useCurrentUserStore } from '../app/stores';

export default function Discover () {
  const { currentUser } = useCurrentUserStore();
  return (
    <div className="m-8">
      <h1 className="text-center text-5xl text-primary font-roboto p-3" >
        {currentUser.first_name}
      </h1>
      <h2 className="text-center text-s text-primary font-roboto uppercase p-2 font-bold">
        from San francisco, ca
      </h2>
      <h2 className="text-center text-s text-teal-800 font-roboto uppercase font-bold">
        in quito, ecu
      </h2>
      <div className="grid gap-4 grid-cols-4 text-center
       hover:bg-violet-300 text-white py-2 px-2">
        {
          currentUser.profile.interests.map((interest) => {
            return (
              <h1 key={interest._id} className="bg-primary px-2 rounded-2xl">
                {interest.name}
              </h1>
            );
          })
        }

      </div>
    </div>

  );
}
