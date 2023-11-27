import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest,
    res: NextApiResponse) {
    const id = +req.query.id!
    res.status(200).json({
        id: id,
        nome: `Joao Almeida ${id}`,
        email: 'kkkaslkhslkdasd'
    })
}