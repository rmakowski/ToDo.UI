interface GetToDoItemResponse {
	id: number;
	name: string;
	description: string | null;
	priority: number;
	isCompleted: boolean;
	createdDateUtc: string;
	updatedDateUtc: string;
}

export default GetToDoItemResponse;
