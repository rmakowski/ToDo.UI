interface UpdateToDoItemRequest {
	name: string;
	description: string | null;
	priority: number;
	isCompleted: boolean;
}

export default UpdateToDoItemRequest;
