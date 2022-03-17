import ApiResponse from "@/services/responses/ApiResponse";
import LoginUserRequest from "./requests/LoginUserRequest";
import RegisterUserRequest from "./requests/RegisterUserRequest";
import LoginUserResponse from "./responses/LoginUserResponse";

export class UserService {
	public async LoginUser(
		loginUserRequest: LoginUserRequest,
	): Promise<void> {
		return await fetch(
			`${process.env.VUE_APP_BACKEND_API_URL}/Users/login`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(loginUserRequest),
			},
		)
			.then((response) => response.json())
			.then((response) => {
				const loginUserResponse = response as ApiResponse<LoginUserResponse>;
				this.Login(loginUserResponse.data as LoginUserResponse);
			})
			.catch(() => {
				// log error
			});
	}

	public async RegisterUser(
		registerUserRequest: RegisterUserRequest,
	): Promise<boolean> {
		return await fetch(
			`${process.env.VUE_APP_BACKEND_API_URL}/Users/register`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(registerUserRequest),
			},
		)
			.then((response) => response.json())
			.then((response) => {
				const registerResponse = response as ApiResponse<boolean>;
				return registerResponse.data as boolean;
			})
			.catch(() => {
				// log error
				return false;
			});
	}

	public async LoginAsDemoUser(): Promise<void> {
		return await fetch(
			`${process.env.VUE_APP_BACKEND_API_URL}/Users/loginAsDemo`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			},
		)
			.then((response) => response.json())
			.then((response) => {
				const loginUserResponse = response as ApiResponse<LoginUserResponse>;
				this.Login(loginUserResponse.data as LoginUserResponse);
			})
			.catch(() => {
				// log error
			});
	}

	public Login(loginUserResponse: LoginUserResponse): void {
		localStorage.setItem("login", loginUserResponse.login);
		localStorage.setItem("createdDate", loginUserResponse.createdDate);
		localStorage.setItem("lastLoginDate", loginUserResponse.lastLoginDate);
		localStorage.setItem("token", loginUserResponse.token);
	}

	public Logout(): void {
		localStorage.removeItem("login");
		localStorage.removeItem("createdDate");
		localStorage.removeItem("lastLoginDate");
		localStorage.removeItem("token");
	}
}
