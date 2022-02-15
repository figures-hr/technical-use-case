import React, { FC, useState, useEffect, useRef } from 'react';

type FormatNumber = (value: number) => string;
const formatNumber: FormatNumber = value => value
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

/**
 * Clearly a gadget component. React-spring already does it and it is cleary better.
 * But I want to try by myself just for the fun.
 *
 * - display number in right format
 * - handle number value change by adding increase or decrease animation
 */
const LabelNumber: FC<{ value: number }> = ({ value }) => {
  const [displayValue, setValue] = useState<number>(0);
  const interval = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => {
      if (interval?.current) {
        clearInterval(interval.current);
      }

      interval.current = setInterval(
        () => {
          setValue(
            v => {
              const diff = Math.floor((value - v) / 2);

              if (diff < 1) {
                clearInterval(interval.current);
                return value;
              }

              return v + diff;
            }
          )
        },
        50)
    },
    [value]
  );

  useEffect(
    // on unmount
    () => () => {
      interval?.current && clearInterval(interval.current)
    },
    []
  );


  return <span>{formatNumber(displayValue)}</span>;
};

export default LabelNumber;

