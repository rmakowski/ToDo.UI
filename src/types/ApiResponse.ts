interface ApiResponse<T> {
	data: T | null;
	success: boolean;
	message: string | null;
}

export default ApiResponse;
