export interface UserModel {
    id: string;
    name: string;
    photoUrl: string;
    email: string;
}

export function newUser(user: UserModel = {
    id: 'testId',
    name: 'test name',
    email: 'test@email.com',
    photoUrl: 'https://placehold.it/100x100?text=user%20avatar'
}): UserModel {
    return user;
}