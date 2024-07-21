import fs from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream";
import { promisify } from "node:util";
import { NextFunction, Request, Response } from "express";

const pipelineAsync = promisify(pipeline);

const writeToFile = (data: string, filePath: string) => {
	fs.writeFile(filePath, data, (err) => {
		if (err) {
			throw {
				Error: "Error writing to file",
			};
		}
	});
};

/**
 * Pipes a readable stream for a file directly to a writeable stream
 * @param filePath {String} - Filepath to file (eg "./dir/file-to-copy.txt")
 */
const copyFileAsStream = (filePath: string) => {
	const { ext, name, dir } = path.parse(filePath);
	const copyName = dir + `/COPY--${name}${ext}`;
	const readable = fs.createReadStream(filePath);
	const writeable = fs.createWriteStream(copyName);

	readable.pipe(writeable);

	writeable.on("finish", () => {
		console.log(`File at ${filePath} was copied to ${copyName} successfully!`);
		readable.close();
		writeable.close();
	});
};

// Create an async image stream that pipes the image's chunks directly to our response object
const serveImageAsStream = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const filename: string = req?.query?.filename as string;
	const filePath = path.join(__dirname + "/assets/images/", filename);
	const readable = fs.createReadStream(filePath);
	const writeable = res;

	await pipelineAsync(readable, writeable);

	readable.on("error", (err) => {
		next(err);
		readable.close();
		readable.destroy();
	});
	readable.on("end", () => {
		readable.close();
		readable.destroy();
	});
};

export { writeToFile, copyFileAsStream, serveImageAsStream };
