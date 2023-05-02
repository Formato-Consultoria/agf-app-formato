// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import ExcuteQuery from '@/services/db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function dataHandles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log("RETORNO DE DADOS: ", await ExcuteQuery('SELECT * FROM Lancamento'));
  res.status(200).json({});
}