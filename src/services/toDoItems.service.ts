import ApiResponse from "@/services/responses/ApiResponse";
import GetToDoItemResponse from "./responses/GetToDoItemResponse";
import GetToDoItemsResponse from "./responses/GetToDoItemsResponse";
import UpdateToDoItemRequest from "./requests/UpdateToDoItemRequest";
import AddToDoItemRequest from "./requests/AddToDoItemRequest";

export class ToDoItemsService {
	public async GetToDoItems(): Promise<GetToDoItemsResponse[]> {
		return await fetch(`${process.env.VUE_APP_BACKEND_API_URL}/ToDoItems`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "",
			},
		})
			.then((response) => response.json())
			.then((response) => {
				const toDoItems = response as ApiResponse<
					GetToDoItemsResponse[]
				>;
				return toDoItems.data as GetToDoItemsResponse[];
			})
			.catch(() => {
				return [] as GetToDoItemsResponse[];
			});
	}

	public async GetToDoItem(id: number): Promise<GetToDoItemResponse> {
		return await fetch(
			`${process.env.VUE_APP_BACKEND_API_URL}/ToDoItems/${id}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": "",
				},
			},
		)
			.then((response) => response.json())
			.then((response) => {
				const toDoItems = response as ApiResponse<GetToDoItemResponse>;
				return toDoItems.data as GetToDoItemResponse;
			})
			.catch(() => {
				return {} as GetToDoItemResponse;
			});
	}

	public async UpdateToDoItem(
		id: number,
		updateToDoItemRequest: UpdateToDoItemRequest,
	): Promise<boolean> {
		return await fetch(
			`${process.env.VUE_APP_BACKEND_API_URL}/ToDoItems/${id}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					"Authorization": "",
				},
				body: JSON.stringify(updateToDoItemRequest),
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

	public async ChangeIsCompletedToDoItem(id: number): Promise<boolean> {
		return await fetch(
			`${process.env.VUE_APP_BACKEND_API_URL}/ToDoItems/change/${id}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					"Authorization": "",
				},
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

	public async AddToDoItem(
		addToDoItemRequest: AddToDoItemRequest,
	): Promise<number> {
		return await fetch(`${process.env.VUE_APP_BACKEND_API_URL}/ToDoItems`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "",
			},
			body: JSON.stringify(addToDoItemRequest),
		})
			.then((response) => response.json())
			.then((response) => {
				const toDoItems = response as ApiResponse<number>;
				return toDoItems.data as number;
			})
			.catch(() => {
				return 0;
			});
	}

	public async DeleteToDoItem(id: number): Promise<boolean> {
		return await fetch(
			`${process.env.VUE_APP_BACKEND_API_URL}/ToDoItems/${id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					"Authorization": "",
				},
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
}
