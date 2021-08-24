import { VercelRequest, VercelResponse } from '@vercel/node';

export default (request: VercelRequest, response: VercelResponse) => {
  const { name = 'World' } = request.query;
  response.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  response.status(200).send(`Hello ${name}!`);
};