import dayjs from 'dayjs';
import { useState } from 'react';
import SparklesIcon from '../../../shared/icons/SparklesIcon';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';



export default function Birthday({ profile, updateProfile }) {
  const [value, setValue] = useState(
    dayjs('2014-08-18T21:11:54')
  );

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleDoneBirthday = () => {
    updateProfile({ tutorial: { done_birthday: true } });
  };


  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen bg-primary">
      <div className="max-w-sm flex flex-col gap 3 mx-6 min-h-screen py-3">
        <div className="grow"></div>
        <div className="grow">
          <h1
            className="text-4xl md:text-2xl font-bold text-left mb-4 text-white"
          >
            So, when is your birthday?
          </h1>
          <p
            className="text-white mt-10"
          >
            People won&apos;t have a chance to see your birthday, just your age.
          </p>
          <div className="grow flex items-start justify-center mt-20 font-bold">
            <MobileDatePicker
              label="Date mobile"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => {
                return <button
                  {...params}
                  className="p-3 w-60 bg-white text-primary text-lg rounded-3xl px-4"
                >
                  {params.inputProps.value}
                </button>;
              }}
            />
          </div>
        </div>
        <div className="grow flex flex-col items-center justify-end mb-4">
          <button
            className="p-3 w-60 bg-white text-primary text-base rounded-3xl px-4
            hover:bg-primary hover:text-white hover:border-white hover:border"
            onClick={handleDoneBirthday}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
