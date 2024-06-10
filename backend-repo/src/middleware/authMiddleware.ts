import { Request, Response, NextFunction } from 'express';
import * as admin from 'firebase-admin';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).send({ message: 'Unauthorized: No token provided' });
    }

    try {
        await admin.auth().verifyIdToken(token);
        next();
    } catch (error) {
        return res.status(401).send({ message: 'Unauthorized: Invalid token', error });
    }
};

export default authMiddleware;