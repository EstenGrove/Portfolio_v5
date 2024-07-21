import {
	PictureSource,
	ProjectLinks,
	ProjectMediaSource,
} from "../projects/types";

// CLIENT FORMATTED TYPES //

export type Language =
	| "javascript"
	| "typescript"
	| "node"
	| "golang"
	| "sql"
	| "bash"
	| "python";

export interface SnippetLinks extends ProjectLinks {}

export interface Tag {
	id: number;
	name: string;
	desc?: string;
}

export interface Snippet {
	id: number;
	title: string;
	desc: string;
	codeSnippet: string;
	tags?: Tag[];
	language: Language;
	fallbackImgSrc: string;
	sourceList: PictureSource[];
	links?: SnippetLinks;
}

// SERVER FORMATTED TYPES //

export interface ServerTag {
	TagID: number;
	Name: string;
	Desc: string;
}

export interface ServerSnippet {
	SnippetID: number;
	Title: string;
	Desc: string;
	CodeSnippet: string;
	Language: Language;
	Tags: ServerTag[];
	ListOfTech: string[];
	FallbackImgSrc: string;
	SourceList: ProjectMediaSource[];
}
