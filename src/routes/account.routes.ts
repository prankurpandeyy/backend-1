import { Router } from 'express';
import { registerAccount } from '../controllers/account.controller';
import { validateApiKey } from '../middlewares/apiKey.middleware';

const router = Router();

router.post('/register', validateApiKey, registerAccount);

/**
 * @swagger
 * /account/register:
 *   post:
 *     summary: Register a new account
 *     tags: [Account]
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - primary_phone
 *               - first_name
 *               - last_name
 *               - birth_date
 *               - gender
 *               - address_line1
 *               - city
 *               - state
 *               - zip
 *               - country
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 minLength: 8
 *               primary_phone:
 *                 type: string
 *               primary_phone_country:
 *                 type: string
 *               primary_phone_type:
 *                 type: string
 *                 enum: [MOBILE, HOME, WORK]
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               birth_date:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *                 enum: [M, F, O]
 *               address_line1:
 *                 type: string
 *               address_line2:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               zip:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       201:
 *         description: Account created successfully
 *       400:
 *         description: Invalid input data
 *       409:
 *         description: Account already exists
 *       500:
 *         description: Server error
 */

export default router; 