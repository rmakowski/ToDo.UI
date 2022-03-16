interface AddToDoItemRequest {
	name: string;
	description: string | null;
	priority: number;
	isCompleted: boolean;
}

export default AddToDoItemRequest;
