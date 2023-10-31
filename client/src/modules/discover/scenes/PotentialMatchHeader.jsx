import useDateInfo from '@/shared/hooks/useDateInfo';

export default function PotentialMatchHeader ({match}) {
  const {get_date_info} = useDateInfo();

  const {isLegalAge, age} = get_date_info(match.profile.birthdate);

  const has_location = match.profile.location_city && match.profile.location_country;

  return (
    <div>
      <img
        src={match.picture}
        alt="avatar"
        className="md:rounded-full rounded-xl mx-auto md:h-72 h-60 w-56 object-cover"
      />
      <h1 className="text-center text-3xl text-primary font-roboto px-3 pt-3" >
        {match.first_name}{isLegalAge && `, ${age}`}
      </h1>
      {has_location && <h2 className="text-center text-xs text-teal-800 font-roboto uppercase font-bold pb-6">
        in {match.profile.location_city},&nbsp;
        {match.profile.location_country}
      </h2>}
    </div>
  );
}
