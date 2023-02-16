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
    name: 'Femi Miller',
    location: 'Jos, Nigeria',
    description: 'Femi Miller is a visionary artist, entrepreneur, and co-founder of the innovative company Muse Defi Network. Hailing from Jos, Nigeria, Femi has combined his passion for gospel music and his business savvy to create a game-changing platform that is revolutionizing the music industry.With his unique blend of gospel feel and energetic rhythm, Femi\'s music is the perfect soundtrack to dance, sing, and celebrate life. His songs are uplifting and inspirational, with a powerful message that connects with audiences of all ages and backgrounds.Femi\'s entrepreneurial spirit led him to partner with Ahzu Direct Tech LLC, a United States-based company, to co-found Muse Defi Network. The company leverages blockchain technology to create a decentralized platform for artists and fans, allowing for direct and instant payments, as well as greater control over the distribution of music and other creative content.As the President of Muse Defi Network, Femi is committed to empowering artists and promoting a fair and transparent music industry. With his passion for gospel music and his entrepreneurial drive, he is an inspiration to others, showing that it is possible to achieve both artistic and business success.Femi Miller is changing the game with his music and his leadership of Muse Defi Network. His gospel-infused sound and infectious energy are winning over audiences around the world, and his innovative work is helping to create a better future for artists and fans alike.',
    polygon: '0x0058BB87F6896Ac0687e142f97ac2438f70f942f'
  })
}
