export type TStatus = "SUCCESS" | "PENDING" | "FAILED";

export interface TData {
	[key: string]: unknown;
}

export interface TModel {
	Status: TStatus;
	Data: TData;
	Message: string;
	Results: number;
	ErrorMessage: string | null;
	ErrorStack: string | null;
}

class ResponseModel {
	model: TModel;

	constructor({
		status,
		data,
		msg,
		results = 0,
		errorMsg = null,
		errorStack = null,
	}) {
		this.model = {
			Status: status,
			Data: data,
			Message: msg,
			Results: results,
			ErrorMessage: errorMsg,
			ErrorStack: errorStack,
		};
		return this.model as TModel;
	}
	getModel() {
		return this.model;
	}
	getProp(prop) {
		if (!this.model.hasOwnProperty(prop)) {
			throw new Error(
				`Invalid property: ${prop} This does not exist on 'model'`
			);
		} else {
			return this.model[prop];
		}
	}
}

module.exports = {
	ResponseModel,
};
