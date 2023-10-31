import AutosaveInput from '@/components/AutosaveInput';

export default function ProfileInfo ({user, updateUser}) {
  const has_location = user.profile.location_city && user.profile.location_country;

  return (
    <div className="flex justify-center px-4">
      <div>
        <div className="grid grid-cols-2 justify-center">
          <AutosaveInput
            isEditable
            isRequired
            placeholder="First Name"
            value={user.first_name}
            onUpdate={(value) => updateUser({first_name: value}, true)}
            type="text"
            className="text-2xl md:text-3xl text-right text-primary font-roboto p-3"
          >
            <h1 className="text-right text-2xl md:text-3xl text-primary font-roboto p-3" >
              {user.first_name}
            </h1>
          </AutosaveInput>
          <AutosaveInput
            isEditable
            isRequired
            placeholder="Last Name"
            value={user.last_name}
            onUpdate={(value) => updateUser({last_name: value}, true)}
            type="text"
            className="text-2xl md:text-3xl text-left text-primary font-roboto p-3"
          >
            <h1 className="text-left text-2xl md:text-3xl text-primary font-roboto p-3" >
              {user?.last_name}
            </h1>
          </AutosaveInput>
        </div>
        {
          has_location &&
          <h2 className="text-center text-sm text-teal-800 font-roboto uppercase font-bold">
            in {user.profile.location_city}, {user.profile.location_country}
          </h2>
        }
      </div>
      {/* <div className="flex justify-end items-center">
        <div className="h-20 w-20 rounded-lg border-2 border-primary text-primary flex items-center justify-center">
          <div className="text-center">
            <p className="text-base">20</p>
            <p className="text-xs font-bold">
              Years old
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
