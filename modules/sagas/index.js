//export { default } from "./employee";
//export { default } from "./user";
import {all} from "redux-saga/effects";
import { watchFetchEmployees, watchAddEmployee, watchRemoveEmployee, watchUpdateEmployee } from "./employee";
import { watchFetchUsers, watchAddUser, watchRemoveUser, watchUpdateUser } from "./user"

export default function* rootSaga() {
    yield all([
        watchFetchEmployees(),
        watchAddEmployee(),
        watchRemoveEmployee(),
        watchUpdateEmployee(),

        watchFetchUsers(),
        watchAddUser(),
        watchRemoveUser(),
        watchUpdateUser()
    ]);
}