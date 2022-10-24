import { useEffect } from 'react';
import useSearch from '../../hooks/useSearch';
import { Ping } from '@uiball/loaders';

export default function OptionsSelector ({
  title = 'Options',
  searchPlaceholder = 'Search for options',
  options = [],
  fetchOptions,
  loading = false,
  selectedOptions = [],
  setSelectedOptions,
  maxSelections = 10,
  minSelections = 5,
  renderSaveButton = () => null
}) {
  const {searchResults, setInputValue} = useSearch({
    source: options,
    keys: ['name']
  });

  const selectOption = (selectedOption) => {
    if (selectedOptions.includes(selectedOption._id)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== selectedOption._id));
    }

    if (selectedOptions.length + 1 > maxSelections) {
      return;
    }

    if (!selectedOptions.includes(selectedOption._id)) {
      setSelectedOptions([...selectedOptions, selectedOption._id]);
    }
  };

  useEffect(() => {
    if (fetchOptions) {
      fetchOptions();
    }
  }, []);

  return (
    <div className="my-10 flex flex-col gap-3 items-center">
      <h1 className="text-3xl text-primary font-bold font-roboto">
        {title}
      </h1>
      <input
        type="text"
        placeholder={searchPlaceholder}
        className={`
          text-lg px-4 py-2 w-96 h-10 rounded-3xl bg-gray-200 text-primary font-roboto font-light
        `}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <div className="flex flex-wrap justify-center my-2">
        {selectedOptions.length}/{maxSelections}
      </div>
      {!loading && 
        <div className="grid md:grid-cols-3 grid-cols-2  gap-3 justify-center">
          {searchResults.map((option, index) => {
            return <PersonalitiesGrid
              key={index}
              option={option}
              selectOption={selectOption}
              selectedOptions={selectedOptions}
            />;
          })}
        </div>
      }
      {loading && 
        <div className="mt-12">
          <Ping size={45} speed={1} />
        </div>
      }

      {
        renderSaveButton({
          disabled: selectedOptions.length < minSelections
        })
      }
    </div>
  );
}

function PersonalitiesGrid ({
  option,
  selectOption,
  selectedOptions
}) {
  const isSelected = selectedOptions.includes(option._id);

  return <div
    className="flex items-center gap-2 select-none"
    onClick={() => selectOption(option)}
  >
    <p
      className={`
      text-primary font-roboto font-light text-lg border-2 w-40 px-2
      h-12 rounded-3xl flex items-center justify-center text-center leading-5
      hover:border-primary hover:font-normal hover:cursor-pointer
        ${isSelected ? 'bg-primary text-white' : 'bg-white text-primary'}
      `}
    >
      {option.name}</p>
  </div>;
}
