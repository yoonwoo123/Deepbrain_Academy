import { HYDRATE } from "next-redux-wrapper";
import * as t from "../types";

const initialState = {
	userList: [],
	selectedUser: undefined
};

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case HYDRATE:
			return { ...state, ...action.payload };
        case t.USER_FETCH_SUCCEEDED:
            return {
                ...state,
                userList: action.payload,
            };
		case t.USER_ADD_SUCCEEDED:
			return {
				...state,
				userList: [action.payload, ...state.userList],
			};
		case t.USER_UPDATE_SUCCEEDED:
			const updatedUser = state.userList.map((user) => {
				if (user._id === action.payload._id) {
					return {
						...euser,
						name: action.payload.name,
						email: action.payload.email,
						address: action.payload.address,
						phone: action.payload.phone,
					};
				}
				return user;
			});

			return { ...state, userList: updatedUser };
		case t.USER_DELETE_SUCCEEDED:
			const newUserList = state.userList.filter(
				(user) => user._id !== action.payload
			);
			return {
				...state,
				userList: newUserList,
			};
		case t.USER_SELECTED:
			const selectedUser = state.userList.find(
				(user) => user._id === action.payload
			);
			return {
				...state,
				selectedUser,
			};
		case t.USER_LOGIN_SUCCEEDED:
			return {
				...state
			}
		case t.USER_LOGOUT_SUCCEEDED:
			return {
				...state
			}
		default:
			return state;
	}
};

export default mainReducer;