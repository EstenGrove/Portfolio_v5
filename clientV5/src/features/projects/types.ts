/////////////////////////////////////////////////
//////////// SERVER FORMATTED TYPES ////////////
/////////////////////////////////////////////////

export interface ProjectMediaSource {
	srcSet: string;
	media: string;
	type: "image/webp" | "image/jpeg" | "image/jpg" | "image/png";
}

export type ProjectMediaSources = ProjectMediaSource[];

export interface ServerProject {
	ProjectID: number;
	Title: string;
	Desc: string;
	Alt: string;
	ListOfTech: string[];
	FallbackImgSrc: string;
	SourceList: ProjectMediaSource[];
}

/////////////////////////////////////////////////
//////////// CLIENT FORMATTED TYPES ////////////
/////////////////////////////////////////////////
export interface PictureSource {
	srcSet: HTMLSourceElement["srcset"];
	media?: HTMLSourceElement["media"];
	type?: HTMLSourceElement["type"];
}

export interface ProjectLinks {
	github?: string;
	site?: string;
}

export interface Project {
	id: number;
	title: string;
	desc: string;
	alt?: string;
	github?: string;
	listOfTech: string[];
	fallbackImgSrc: string;
	sourceList: PictureSource[];
	links?: ProjectLinks;
}

export type ProjectsList = Project[];
