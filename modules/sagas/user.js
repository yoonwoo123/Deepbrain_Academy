import { all, put, takeLatest } from "redux-saga/effects";
import * as t from "../types";

function* fetchUsers() {
	try {
		const response = yield fetch("/api/users");
		const userList = yield response.json();

		yield put({
			type: t.USER_FETCH_SUCCEEDED,
			payload: userList.data,
		});
	} catch (error) {
		yield put({
			type: t.USER_FETCH_FAILED,
			payload: error.message,
		});
	}
}

export function* watchFetchUsers() {
	yield takeLatest(t.USER_FETCH_REQUESTED, fetchUsers);
}

function* addUser(action) {
    console.log("sagas action", action)
	try {
		const response = yield fetch("/api/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(action.payload),
		});

		const newUser = yield response.json();
		console.log('newUser', newUser);
		console.log('response.status', response.status);

		if (response.status == 201) {
			yield put({
				type: t.USER_ADD_SUCCEEDED,
				payload: newUser.data,
			});
			
			console.log("유저 생성 완료")
			yield put(window.location.href = "./");
		}
	} catch (error) {
		yield put({
			type: t.USER_ADD_FAILED,
			payload: error.message,
		});
	}
}

export function* watchAddUser() {
	yield takeLatest(t.USER_ADD_REQUESTED, addUser);
}

function* deleteUser(action) {
	try {
		const response = yield fetch("/api/users/" + action.payload, {
			method: "DELETE",
		});

		const deletedUser = yield response.json();

		yield put({
			type: t.USER_DELETE_SUCCEEDED,
			payload: deletedUser.data.id,
		});
	} catch (error) {
		yield put({
			type: t.USER_DELETE_FAILED,
			payload: error.message,
		});
	}
}

export function* watchRemoveUser() {
	yield takeLatest(t.USER_DELETE_REQUESTED, deleteUser);
}

function* updateUser(action) {
	try {
		const response = yield fetch("/api/users/" + action.payload._id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(action.payload),
		});

		const updatedUser = yield response.json();

		yield put({
			type: t.USER_UPDATE_SUCCEEDED,
			payload: updatedUser.data,
		});
	} catch (error) {
		yield put({
			type: t.USER_UPDATE_FAILED,
			payload: error.message,
		});
	}
}

export function* watchUpdateUser() {
	yield takeLatest(t.USER_UPDATE_REQUESTED, updateUser);
}

function* loginUser(action) {
	try {
		const response = yield fetch("/api/users/login", {
			method: "POST",
			headers: {
				"Content-Type" : "application/json",
			},
			body: JSON.stringify(action.payload)
		});

		if( response.status == 200) {
			localStorage.setItem("user", JSON.stringify(action.payload));
			const newUser = yield response.json();
			yield put({
				type: t.USER_LOGIN_SUCCEEDED,
				payload: newUser.data
			});
		}

	} catch (error) {
		yield put({
			type: t.USER_LOGIN_FAILED,
			payload: error.message,
		});
	}
}

export function* watchLogin() {
	yield takeLatest(t.USER_LOGIN_REQUESTED, loginUser);
}
