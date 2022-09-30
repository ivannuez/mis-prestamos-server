import { Router } from 'express'
const router = Router()

//importing all routes here
router.get('/api/prestamos/cliente/:clientId', (req, res) => {
    console.log(req.params.clientId);
    return res.json([
        { 
            nombre: 'Mi Casa',
            usuarioDeudor: 'ivannu',
            usuarioPrestador: 'yango',
            fechaAdquisicion: '20220101',
            fechaPago: '15',
            fechaFinalizacion: '20221201',
            cuotas: 48,
            cuotasPagadas: 40,
            cuotasSaldo: 8,
            montoTotal: 1000000,
            montoSaldo: 2000000,
            montoPagado: 8000000,
            montoMensual: 12000000
        },
        { 
            nombre: 'Mi Auto',
            usuarioDeudor: 'ivannu',
            usuarioPrestador: 'yango',
            fechaAdquisicion: '20220101',
            fechaPago: '15',
            fechaFinalizacion: '20221201',
            cuotas: 48,
            cuotasPagadas: 40,
            cuotasSaldo: 8,
            montoTotal: 1000000,
            montoSaldo: 2000000,
            montoPagado: 8000000,
            montoMensual: 12000000
        },
        { 
            nombre: 'Mi Terreno',
            usuarioDeudor: 'ivannu',
            usuarioPrestador: 'yango',
            fechaAdquisicion: '20220101',
            fechaPago: '15',
            fechaFinalizacion: '20221201',
            cuotas: 48,
            cuotasPagadas: 40,
            cuotasSaldo: 8,
            montoTotal: 1000000,
            montoSaldo: 2000000,
            montoPagado: 8000000,
            montoMensual: 12000000
        },
        { 
            nombre: 'Mi Viaje',
            usuarioDeudor: 'ivannu',
            usuarioPrestador: 'yango',
            fechaAdquisicion: '20220101',
            fechaPago: '15',
            fechaFinalizacion: '20221201',
            cuotas: 48,
            cuotasPagadas: 40,
            cuotasSaldo: 8,
            montoTotal: 1000000,
            montoSaldo: 2000000,
            montoPagado: 8000000,
            montoMensual: 12000000
        }
    ]);
})

router.post('/api/prestamos/cliente', (req, res) => {
    console.log(req.body);
    return res.status(200).send();
})

export default router
