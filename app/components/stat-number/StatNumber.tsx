import React, { FC } from 'react';

import LabelNumber from '@/components/label-number/LabelNumber';

export type StatNumberProps = {
  value: number;
  label: string;
};

/**
 * display a stat number with its label
 *
 */
const StatNumber: FC<StatNumberProps> = ({ value, label }) => (
  <div className="bg-white rounded-lg overflow-hidden text-left shadow transform transition-all">
    <div className="bg-white p-5 flex flex-col">
      <h3 className="uppercase text-sm leading-6 font-medium text-gray-400">{label}</h3>
      <p className="text-3xl font-bold text-black text-right">
        <LabelNumber value={value} />
      </p>
    </div>
  </div>
);

export default StatNumber;
