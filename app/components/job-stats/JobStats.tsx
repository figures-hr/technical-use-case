import React, { FC, useState, useEffect } from 'react';

import StatNumber, { StatNumberProps } from '@/components/stat-number/StatNumber';

export type JobStatsProps = {
  id?: string;
};

type RenderItem = (args: StatNumberProps) => React.ReactElement;
const renderItem = (props) => (
  <StatNumber
    key={`statsNumber___${props.label}`}
    {...props}
  />
);

/**
 * Fetch api/stats and display stats result
 *
 */
const JobStats:FC<JobStatsProps> = ({ id }) => {
  const [stats, setStats] = useState<StatNumberProps[]>([]);

  useEffect(() => {
    if (!id) {
      setStats([]);
      return;
    }

    fetch(`/api/stats?id=${id}`).then(
      r => r.json()
    ).then(setStats)
  }, [id]);

  if (!stats.length) {
    return null;
  }

  return (
    <div className="mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
      <div className="flex flex-col items-stretch gap-5">
        {stats.map(renderItem)}
      </div>
    </div>
  );
}

export default JobStats;
