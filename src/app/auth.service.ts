import { Injectable } from '@angular/core';
export interface User {
	email: string;
	password: string;
}
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor() { }
	public signIn(userData: User) {
		const userList = localStorage.getItem('usersList') ? JSON.parse(localStorage.getItem('usersList')) : [];
		return userList.findIndex((data) => data.email == userData.email && data.password == userData.password)
	}

}