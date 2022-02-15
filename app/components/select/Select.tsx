import React, { FC, ChangeEvent, useCallback } from 'react';

import { Option } from '@/core/types';

export type SelectProps = {
  className?: string;
  placeholder?: string;
  name: string;
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

type RenderOption = (name: string, value?: string) => (item: Option) => React.ReactElement;

// eslint-disable-next-line react/display-name
const renderOption = (name) => (item) => (
  <option
    key={`select_item_${name}__${item.value}`}
    value={item.value}
  >
    {item.label}
  </option>
);

/**
 * simple input select
 *
 */
const Select:FC<SelectProps> = ({
  className,
  options,
  value,
  label,
  name,
  placeholder,
  onChange
}) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange && onChange(e.currentTarget.value)
    },
    [onChange]
  );

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="relative inline-block w-full text-gray-700">
        <select
          className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
          id={name}
          value={value}
          onChange={handleChange}
        >
          {
            placeholder
              ? <option value=''>{placeholder}</option>
              : null
          }
          {options.map(renderOption(name))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Select;
