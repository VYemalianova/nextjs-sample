import { db } from '../index';
import { users } from '../schema/user';
import { IUser } from '../../types/user.model';

import dummyData from '../dummy-data/users.json';

const usersData = dummyData as IUser[];

const seedUsers = () => {
  for (const user of usersData) {
    const dbUser = {
      email: user.email,
      role: user.role,
      passwordHash: user.password,
    };

    db
      .insert(users)
      .values(dbUser)
      .onConflictDoUpdate({
        target: users.email,
        set: {...dbUser, createdAt: new Date(), updatedAt: new Date()},
      })
      .run();
  }
}

export default seedUsers
