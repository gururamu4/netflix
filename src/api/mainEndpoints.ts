import axios from './main';

const signup = async (data: any) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.post('https://roseflix-backend.herokuapp.com/api/v1/signup', data);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
};


const checkAvailability = async (data: any) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.post('https://roseflix-backend.herokuapp.com/api/v1/users/checkAvailability', data);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
};

const signin = async (data: any) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.post('https://roseflix-backend.herokuapp.com/api/v1/signin', data);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
};

const upsertProfile = async (data: any) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.post('https://roseflix-backend.herokuapp.com/api/v1/users/upsertProfile', data);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
};

const deleteProfile = async (data: any) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.post('https://roseflix-backend.herokuapp.com/api/v1/users/deleteProfile', data);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
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
