import ApiResponse from "@/types/ApiResponse";
import ToDoItem from "@/types/ToDoItem";

export class ToDoItemsService {
	public async GetToDoItems(): Promise<ToDoItem[]> {
		return await fetch(`${process.env.VUE_APP_BACKEND_API_URL}/ToDoItems`, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((response) => {
				const toDoItems = response as ApiResponse<ToDoItem[]>;
				return toDoItems.data as ToDoItem[];
			})
			.catch(() => {
				return [] as ToDoItem[];
			});
	}

	public async ResetToDoItems(): Promise<boolean> {
		return await fetch(
			`${process.env.VUE_APP_BACKEND_API_URL}/ToDoItems/reset`,
			{
				method: "GET",
			},
		)
			.then(() => {
				return true;
			})
			.catch(() => {
				return false;
			});
	}
}
