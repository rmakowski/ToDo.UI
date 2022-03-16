import ApiResponse from "@/services/responses/ApiResponse";
import LoginUserRequest from "./requests/LoginUserRequest";
import RegisterUserRequest from "./requests/RegisterUserRequest";
import LoginUserResponse from "./responses/LoginUserResponse";

export class UserService {
	public async LoginUser(
		loginUserRequest: LoginUserRequest,
	): Promise<LoginUserResponse> {
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
				const toDoItems = response as ApiResponse<LoginUserResponse>;
				return toDoItems.data as LoginUserResponse;
			})
			.catch(() => {
				return {} as LoginUserResponse;
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
				const toDoItems = response as ApiResponse<boolean>;
				return toDoItems.data as boolean;
			})
			.catch(() => {
				return false;
			});
	}

	public async LoginAsDemoUser(): Promise<LoginUserResponse> {
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
				const toDoItems = response as ApiResponse<LoginUserResponse>;
				return toDoItems.data as LoginUserResponse;
			})
			.catch(() => {
				return {} as LoginUserResponse;
			});
	}
}
