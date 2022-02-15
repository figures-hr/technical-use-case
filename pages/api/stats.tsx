import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  const { id } = req.query;

  /**
   * I haven't found how to do it with prisma.aggregate...
   * So I prefer to let the postgres works for me.
   */
  const stats = await prisma.$queryRaw`
    SELECT
      AVG(salary) as avg,
      PERCENTILE_CONT(0.75) WITHIN GROUP (order by salary) as P75,
      PERCENTILE_CONT(0.5) WITHIN GROUP (order by salary) as median,
      PERCENTILE_CONT(0.25) WITHIN GROUP (order by salary) as P25,
      count(*)
    FROM "Employee"
      WHERE "jobId"=${parseInt(id)}
  `;

  const result = Object.keys(stats[0]).map(
    label => ({ label, value: Math.floor(stats[0][label] / 100) })
  );

  res.status(200).json(result);
}
