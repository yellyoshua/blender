import SparklesIcon from '@/icons/SparklesIcon';

export default function PersonalizeExperience ({profile, updateProfile}) {
  const handleDonePersonalize = () => {
    updateProfile({tutorial: {done_personalize_experience: true}});
  };


  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen">
      <div className="max-w-sm flex flex-col gap 3 mx-6 min-h-screen py-3">
        <div className="grow"></div>
        <div className="grow">
          <div
            className={`
              flex items-center justify-center w-28 h-28 rounded-full bg-primary
            `}
          >
            <SparklesIcon
              className="w-16 h-16 text-white"

            />
          </div>
        </div>
        <div className="grow">
          <h1
            className="text-4xl md:text-2xl font-bold text-left mb-4 text-primary"
          >
            Personalize your experience
          </h1>
          <p>
            An app that fits you, makes us happy.
          </p>
        </div>
        <div className="grow"></div>
        <div className="grow flex flex-col items-center justify-end mb-4">
          <button
            className="p-3 w-60 bg-primary text-white text-base rounded-3xl px-4"
            onClick={handleDonePersonalize}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
