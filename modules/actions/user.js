import * as t from "../types";

export const fetchUsers = () => {
	return {
		type: t.USER_FETCH_REQUESTED,
	};
};

export const addUser = (user) => {
	return {
		type: t.USER_ADD_REQUESTED,
		payload: user,
	};
};

export const updateUser = (user) => {
	return {
		type: t.USER_UPDATE_REQUESTED,
		payload: user,
	};
};

export const deleteUser = (id) => {
	return {
		type: t.USER_DELETE_REQUESTED,
		payload: id,
	};
};

export const setSelectedUser = (id) => {
	return {
		type: t.USER_SELECTED,
		payload: id,
	};
};

export const loginUser = (user) => {
	return {
		type: t.USER_LOGIN_REQUESTED,
		payload: user,
	};
};

export const logoutUser = (user) => {
	return {
		type: t.USER_LOGOUT_REQUESTED,
		payload: user,
	};
};


