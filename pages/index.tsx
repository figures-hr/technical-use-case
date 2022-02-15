import React, { ChangeEvent, useState } from 'react';

import { prisma } from '../lib/prisma';

import { Option } from '@/core/types';

import Select from '@/components/select/Select';
import JobStats from '@/components/job-stats/JobStats';

export async function getStaticProps() {
  const jobs = await prisma.job.findMany({
    select: {
      name: true,
      id: true
    }
  });

  return {
    props: {
      jobs: jobs.map(
        /**
         * not found how rename fields with prisma... So I made it in javascript.
         * If you know how to do, let me know.
         */
        v => ({ label: v.name, value: v.id })
      )
    }
  }
}

type HomeProps = {
  jobs: Option[],
  onChange: (value: string) => void;
}

const Home: React.FC<HomeProps> = ({ jobs, onChange }) => {
  const [jobId, setJobId] = useState<string>(undefined)


  return (
    <div className="w-full h-full flex flex-col items-center gap-5 p-10">
      <div className="md:w-2/3 lg:w-1/3">
        <Select
          name='input-job'
          label='Which role(s) are you interested in?'
          placeholder='Choose a role'
          options={jobs}
          value={jobId}
          onChange={setJobId}
        />
      </div>

      <JobStats id={jobId} />
    </div>
  );
};

export default Home;
