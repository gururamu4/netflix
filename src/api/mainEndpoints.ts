import { Profile, User } from '../constants/types';

const signup = async (data: any) => {
    return new Promise((resolve) => {
        const dummyResponse = { success: true, message: 'User signed up successfully', data };
        resolve(dummyResponse);
    });
};

const checkAvailability = async (data: any) => {
    return new Promise((resolve) => {
        const isAvailable = data.value !== 'taken@example.com';
        const dummyResponse = { success: true, isAvailable };
        resolve(dummyResponse);
    });
};

const signin = async (data: any) => {
    return new Promise((resolve) => {
        const dummyResponse = { success: true, message: 'User signed in successfully', data: {
            userDetails: {
                _id: '123',
                email: 'guru@gmail.com',
                phone: '9994564326',
                profiles: [
                    {_id: '1', name: 'Profile 1', avatar: 'Avatar_02.png'},
                    {_id: '1', name: 'Profile 3', avatar: 'Avatar_07.png'},
                ]
            }
        }, authorization: "Bearer dummy" };
        resolve(dummyResponse);
    });
};

const upsertProfile = async (data: any) => {
	return new Promise(async (resolve, reject) => {
		try {
			// const response = await axios.post('https://roseflix-backend.herokuapp.com/api/v1/users/upsertProfile', data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

const deleteProfile = async (data: { profileId: string }) => {
    return new Promise((resolve) => {
        const dummyUser: User = {
            _id: '123',
            email: 'dummy@example.com',
            phone: '1234567890',
            profiles: []
        };
        const dummyResponse = { success: true, message: 'Profile deleted successfully', user: dummyUser };
        resolve(dummyResponse);
    });
};

const mainHttp = {
    signup,
    signin,
    checkAvailability,
    upsertProfile,
    deleteProfile
};

export default mainHttp;