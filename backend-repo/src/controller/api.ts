import { Request, Response } from 'express';
import userRepository from '../repository//userCollections';
import { User } from '../entities/User';

export const updateUser = async (req: Request, res: Response) => {
    const { id, data } = req.body as { id: string; data: Partial<User> };
    try {
        await userRepository.updateUser(id, data);
        res.status(200).send({ message: 'User data updated successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error updating user data', error });
    }
};

export const fetchUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const userData = await userRepository.fetchUser(id);
        if (!userData) {
            res.status(404).send({ message: 'User not found' });
        } else {
            res.status(200).send(userData);
        }
    } catch (error) {
        res.status(500).send({ message: 'Error fetching user data', error });
    }
};
