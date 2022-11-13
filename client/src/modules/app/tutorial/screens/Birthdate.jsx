import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import useDateInfo from '../../../shared/hooks/useDateInfo';
import Icon from '../../../shared/components/Icon';

export default function Birthdate ({ updateProfile }) {
  const {get_date_info} = useDateInfo();
  const [value, setValue] = useState(
    dayjs('2000-01-01T21:11:54')
  );

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleDoneBirthdate = () => {
    updateProfile({
      birthdate: value,
      tutorial: { done_birthdate: true }
    });
  };

  const dateInfo = useMemo(() => {
    return get_date_info(value);
  }, [value]);

  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen bg-primary">
      <div className="max-w-sm flex flex-col gap 3 mx-6 min-h-screen py-3">
        <div className="grow"></div>
        <div className="grow">
          <h1
            className="text-4xl md:text-2xl font-bold text-left mb-4 text-white"
          >
            So, when is your birthdate?
          </h1>
          <p
            className="text-white mt-10"
          >
            People won&apos;t have a chance to see your birthdate, just your age.
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
          {false &&
            <div className="flex items-center gap-1 justify-center mt-3 text-white">
              <Icon icon={dateInfo.zodiac.icon} kind="tablericons" className="w-8 h-10" />
              {dateInfo.zodiac.label}, {dateInfo.age}
            </div>
          }
        </div>
        <div className="grow flex flex-col items-center justify-end mb-4">
          <button
            disabled={!dateInfo.isLegalAge}
            className={`
              p-3 w-60 bg-white text-primary text-base rounded-3xl px-4 cursor-pointer
              ${dateInfo.isLegalAge ? 'hover:bg-primary hover:text-white hover:border-white hover:border' : 'opacity-30'}
            `}
            onClick={handleDoneBirthdate}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
