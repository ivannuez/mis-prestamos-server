import { Router } from 'express'
const router = Router()

//importing all routes here
router.get('/api/saldo/cliente/:clientId', (req, res) => {
    console.log(req.params.clientId);
    return res.json({ deuda: 100000, pagado: 80000, saldo: 20000 });
})

export default router
