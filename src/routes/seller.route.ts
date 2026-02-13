import express from 'express';
import { sellerController } from '../controllers/seller.controller.js';

const router = express.Router();

router.post('/seller/register', sellerController.createSeller)
router.post('/seller/add_bank_details', sellerController.addBankDetails )
router.post('/seller/add_business_details', sellerController.addBusinessDetails)

export default router;