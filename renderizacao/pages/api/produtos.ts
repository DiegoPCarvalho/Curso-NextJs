// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number
  name: string
  price: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    { id: numeroAleatorio(), name: 'Caneta', price: 5.60 },
    { id: numeroAleatorio(), name: 'Lapis', price: 360 },
    { id: numeroAleatorio(), name: 'Notebook', price: 5.60 },
    { id: numeroAleatorio(), name: 'Frigideira', price: 5.60 },
  ])
}


function numeroAleatorio(min = 1, max = 1000){
  return parseInt(((Math.random() * (max - min)) + min).toString())
}