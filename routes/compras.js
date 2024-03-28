import express from 'express'
import { getCompras , postCompras,putCompras,deleteCompras} from '../controllers/compras.js';
const router = express.Router();

router.get('/', getCompras)
router.post('/', postCompras)
router.put('/:id', putCompras)
router.delete('/:id', deleteCompras)

export { router }
