// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id:string
  name:string
  location:string
  description:string
  polygon:string

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    id:'1',
    name: 'Muse Defi Network',
    location: 'Las Vegas, United States of America',
    description: 'Muse Defi Label description.',
    polygon: '0x0058BB87F6896Ac0687e142f97ac2438f70f942f'
  })
}
