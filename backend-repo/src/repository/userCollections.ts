import { db } from '../config/firebaseConfig';
import { User } from '../entities/User';

class UserRepository {
    private collection = db.collection('USERS');

    async updateUser(id: string, data: Partial<User>): Promise<void> {
        await this.collection.doc(id).update(data);
    }

    async fetchUser(id: string): Promise<User | null> {
        const userDoc = await this.collection.doc(id).get();
        if (!userDoc.exists) {
            return null;
        }
        const userData = userDoc.data() as User;
        return { ...userData, id };
    }
}

export default new UserRepository();
