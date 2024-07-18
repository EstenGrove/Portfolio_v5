import fs from "node:fs";
import path from "node:path";

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

export { writeToFile, copyFileAsStream };
