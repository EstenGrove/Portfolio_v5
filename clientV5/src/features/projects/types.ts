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
	Links: {
		github: string | null;
		site: string | null;
	};
}

export interface ServerProjectInfo extends ServerProject {
	About: string[];
	UseCases: string[];
	Insights: string[];
	CreatedDate: string;
	UpdatedDate: string | null;
	IsActive: boolean;
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

export interface ProjectInfo extends Project {
	about: string[];
	usecases: string[];
	insights: string[];
	createdDate: string;
	updatedDate: string | null;
	isActive: true;
}

export type ProjectsList = Project[];
