type TFields = {
	[fieldName: string]: any
}

export function getPreparedFields (fields: TFields): TFields {
	const result: TFields = {};

	Object
		.entries(fields)
		.filter(([_fieldKey, fieldValue]) => typeof fieldValue != "undefined" && fieldValue != "")
		.forEach(([fieldName, fieldValue]) => {
			result[fieldName] = fieldValue;
		});

	return result;
}