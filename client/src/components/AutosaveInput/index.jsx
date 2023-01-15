import _ from 'underscore';
import { useCallback, useState } from 'react';

export default function AutosaveInput ({
  value,
  children,
  onUpdate,
  className,
  placeholder,
  type = 'text',
  name,
  disabled = false,
  debounce = 500,
  isRequired = false,
  isEditable = true,
  isPhone = false,
  isSearch = false,
  isTextarea = false,
  isColor = false,
  isDate = false
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [isSaving, setIsSaving] = useState(false);
  const [isError, setIsError] = useState(false);

  const debouncedSave = useCallback(
    _.debounce(async (value) => {
      setIsSaving(true);
      await onUpdate(value);
      setIsSaving(false);
    }, debounce),
    []
  );

  const handleInput = useCallback(
    (ele) => {
      setInputValue(ele.target.value);
      debouncedSave(ele.target.value);
    },
    [debouncedSave]
  );

  if (isEditing) {
    if (isTextarea) {
      return (
        <textarea
          name={name}
          disabled={disabled}
          className={className}
          value={inputValue}
          onChange={handleInput}
          onBlur={() => setIsEditing(false)}
        />
      );
    }

    return (
      <input
        type={type}
        name={name}
        disabled={disabled}
        className={`
          ${className} border-b border-primary
        `}
        value={inputValue}
        onChange={handleInput}
        onBlur={() => setIsEditing(false)}
        placeholder={placeholder}
        required={isRequired}
        pattern={isPhone ? '^[0-9]{10}$' : null}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
    );
  }

  return (
    <div
      className={`
        ${isEditable ? 'cursor-pointer' : 'cursor-not-allowed'}
      `}
      onClick={() => {
        if (isEditable) {
          setIsEditing(true);
        }
      }}
    >
      {children}
    </div>
  );
}
