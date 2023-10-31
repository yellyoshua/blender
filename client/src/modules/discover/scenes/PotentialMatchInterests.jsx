import _ from 'underscore';
import BadgesList from '@/components/BadgesList';

export default function PotentialMatchInterests ({match}) {
  return (
    <div>
      <div className="flex justify-between items-center px-2">
        <p className="text-left text-base font-bold text-primary font-roboto" >
          Interests
        </p>
        <p className="text-primary text-sm font-bold rounded text-right">
          {match.percentage_interests}% Alike
        </p>
      </div>
      <BadgesList
        badges={match.profile.interests}
        beforeRender={(interest) => {
          return _(match.common_interests).findWhere({_id: interest._id})
            ? _(interest).extend({active: true})
            : interest;
        }}
      />

      <div className="flex justify-between items-center px-2">
        <p className="text-left text-base font-bold text-primary font-roboto" >
          Personalities
        </p>
        <p className="text-primary text-sm font-bold rounded text-right">
          {match.percentage_personalities}% Alike
        </p>
      </div>

      <BadgesList
        badges={match.profile.personalities}
        beforeRender={(personality) => {
          return _(match.common_personalities).findWhere({_id: personality._id})
            ? _(personality).extend({active: true})
            : personality;
        }}
      />
    </div>
  );
}
