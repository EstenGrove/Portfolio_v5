import fs from "node:fs";
import { formatDateTime } from "../third-party/date-fns";
// REQUIREMENTS:
// 1. Error that occurred
//    - eg. OOM, operational error, network error etc
// 2. Where the error occurred:
//    - What file, stack trace etc
// 3. Log location for the error to be written to:
//    - eg. "./logs/error.log"
// 4. Any actions that followed the error:
//    - eg. how it was handled (ie restart, dump memory, graceful restart etc.)

export type ErrorCallback = (err: NodeJS.ErrnoException) => void;

// Takes a message, file path location & an optional callback for throwing
const logMsg = (
	msg: string,
	filePath: string,
	callback?: ErrorCallback | null
) => {
	// check if log file exists, if it does append to the end...
	// if it doesn't exist, create it & write to it
	const msgWithNewLine = `${msg}\n\n`;
	fs.exists(filePath, (doesExist: boolean) => {
		if (doesExist) {
			fs.appendFile(filePath, msgWithNewLine, (err) => {
				if (err) {
					if (callback) {
						callback(err as NodeJS.ErrnoException);
					}
				}
			});
		} else {
			fs.writeFile(filePath, msgWithNewLine, { flag: "wx" }, (err) => {
				if (err) {
					if (callback) {
						callback(err as NodeJS.ErrnoException);
					}
				}
			});
		}
	});
};

export enum LogLevel {
	CRITICAL = 0,
	ERROR = 1,
	WARN = 2,
	INFO = 3,
	ALERT = 4,
	DEBUG = 5,
}

export enum LogLevelName {
	CRITICAL = "CRITICAL",
	ERROR = "ERROR",
	WARN = "WARN",
	INFO = "INFO",
	ALERT = "ALERT",
	DEBUG = "DEBUG",
}

class Logger {
	private _msg: string; // raw message, without formatting
	private _formattedMsg: string; // formatted msg: "07-18-2024 07:23 AM - Error:...""
	private _logFilePath: string; // eg. "./errors/error.log"
	private _logLevel: LogLevel;

	constructor(logFile: string = "") {
		this._msg = "";
		this._logLevel = LogLevel.INFO;
		this._logFilePath = logFile;
		// apply timestamp & formatting to message
		this._formattedMsg = this._formatMsg(this._msg);
	}

	// public getters
	public get msg(): string {
		return this._msg;
	}
	public get formattedMsg(): string {
		return this._formattedMsg;
	}
	public get logLevel(): LogLevel {
		return this._logLevel;
	}

	// public setters
	public set msg(newMsg: string) {
		this._msg = newMsg;
	}
	public set formattedMsg(newMsg: string) {
		const formatted = this._formatMsg(newMsg);
		this._formattedMsg = formatted;
	}
	public set logLevel(level: LogLevel) {
		this._logLevel = level;
	}
	public log(msg?: string, filePath?: string) {
		const localMsg = msg ?? this._msg;
		const newMsg = this._formatMsg(localMsg);
		const location = filePath ?? this._logFilePath;
		// will write the logger's message value, if no override is provided
		logMsg(newMsg, location);
	}

	private _getLogLevelName(): string {
		const lvlNum = this._logLevel;
		const name = LogLevel[lvlNum];
		// const name = LogLevelName[lvlNum];
		return name;
	}

	private _formatMsg(msg: string): string {
		const rawMsg = msg ?? this._msg;
		const date = new Date().toISOString();
		const logLevel = this._getLogLevelName();
		const timestamp = formatDateTime(date, "long");

		// let formattedMessage = `${timestamp} - ${rawMsg}`;
		let formattedMessage = `Date: ${timestamp}
    Log Level: ${logLevel} (${this._logLevel})
    ${rawMsg}
    `;
		return formattedMessage;
	}
}

class ErrorLogger extends Logger {
	private _error?: Error;
	private _errorMsg?: string;
	private _errorType?: string; // operational, type error, etc
	private _errorCode?: string;
	private _errorLogFile: string = "./logs/errors/error.log";

	constructor(filePath?: string) {
		super(filePath ?? "./logs/errors/error.log");
		// set log level to 'ERROR', unless otherwise specified
		this.logLevel = LogLevel.ERROR;
	}

	public set error(err: Error) {
		this._error = err;

		const msg = this._formatErrorMsg();
		this._errorMsg = msg;
	}
	public set errorCode(code: string) {
		this._errorCode = code;
	}
	public set errorType(type: string) {
		this._errorType = type;
	}
	public logError(err?: Error) {
		this._error = err;
		const msg = this._formatErrorMsg();
		this.log(msg);
	}
	private _formatErrorMsg(error?: Error): string {
		const localErr = this._error as Error;
		const msg = error?.message ?? localErr.message;
		const trace = error?.stack ?? localErr.stack;
		const newMsg = `Message: ${msg}
    ${trace}`;

		return newMsg;
	}
}

export { logMsg, Logger, ErrorLogger };
