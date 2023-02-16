// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id:string
  name: string
  location:string
  description: string

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    id:'1',
    name: 'Femi Miller',
    location: 'Jos, Nigeria',
    description: 'Capricornia is a Nigerian reggae singer on a mission to spread joy and positivity through her music. With a powerful voice and a passion for reggae, she has quickly become one of the most sought-after artists in the genre. In only a short while, Capricornia \'s music has reached over 50 countries, earning her a dedicated following of fans who love her unique sound and upbeat vibe. She is the poster child for the new MetaVerse Radio station Muse Defi Radio, where her music is celebrated and enjoyed by listeners around the world. Capricornia \'s music is a celebration of life, love, and hope, and her positive energy is contagious. Her powerful voice and uplifting lyrics have earned her a reputation as one of the brightest stars in the reggae music scene, and her fans can\'t get enough of her infectious grooves and soulful melodies.'
  })
}
