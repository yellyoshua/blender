import { useEffect } from 'react';
import { Ping } from '@uiball/loaders';
import { useDiscoverStores, useBumpFistsStore } from './stores';
import EmptyDiscover from './scenes/EmptyDiscover';
import PotentialMatchHeader from './scenes/PotentialMatchHeader';
import PotentialMatchInterests from './scenes/PotentialMatchInterests';
import DiscoverActions from './scenes/DiscoverActions';
import Punched from './scenes/Punched';


export default function Discover () {
  const {potentialMatch, loading, discover} = useDiscoverStores();
  const {punched, reset} = useBumpFistsStore();

  useEffect(() => {
    discover();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center mx-auto">
        <Ping size={45} speed={1} />
      </div>
    );
  }

  if (punched) {
    return (
      <Punched
        punched={punched}
        discover={() => {
          reset();
          discover();
        }}
      />
    );
  }

  if (!potentialMatch) {
    return <EmptyDiscover refresh={discover} />;
  }

  return (
    <div className="my-5 px-5" style={{paddingBottom: 65}}>
      <PotentialMatchHeader match={potentialMatch} />
      <PotentialMatchInterests match={potentialMatch} />
      <div className="pb-20 w-full h-1"/>
      <DiscoverActions discover={discover} match={potentialMatch} />
    </div>
  );
}
