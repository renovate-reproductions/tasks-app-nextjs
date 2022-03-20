import type { NextApiRequest, NextApiResponse } from 'next';

type Body = {
  enabled?: boolean;
  trackLocalhost?: boolean;
  domain?: Location['hostname'];
  apiHost?: string; // use self-hosted or proxy
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const body: Body = {
    enabled: true,
    domain: 'demo.macchiitaka.dev',
    trackLocalhost: true,
  };
  res.status(200).json(body);
};

export default handler;
