import JwtObject from "./JwtObject";

export class JwtHelper {
	private urlBase64Decode(str: string) {
		let output = str.replace(/-/g, "+").replace(/_/g, "/");
		switch (output.length % 4) {
			case 0:
				break;
			case 2:
				output += "==";
				break;
			case 3:
				output += "=";
				break;
			default:
				// tslint:disable-next-line:no-string-throw
				throw "Illegal base64url string!";
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return decodeURIComponent((<any>window).escape(window.atob(output)));
	}

	public decodeToken(token: string | null = ""): JwtObject {
		if (token === null || token === "") {
			return {} as JwtObject;
		}
		const parts = token.split(".");
		if (parts.length !== 3) {
			throw new Error("JWT must have 3 parts");
		}
		const decoded = this.urlBase64Decode(parts[1]);
		if (!decoded) {
			throw new Error("Cannot decode the token");
		}
		return JSON.parse(decoded) as JwtObject;
	}
}
