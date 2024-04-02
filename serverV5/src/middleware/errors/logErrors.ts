const logError = (error, req, res, next) => {
	console.log(`❌ ERROR LOGGED: ${error.message}`);
	next(error);
};
const invalidPathHandler = (req, res, next) => {
	// DO SOMETHING
};
