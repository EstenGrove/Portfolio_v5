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

// DB FORMAT
export interface DBProject {
	project_id: number;
	title: string;
	description: string;
	alt: string;
	list_of_tech: string[];
	fallback_img_src: string;
	source_list: Array<{ srcSet: string; media: string; type: string }>;
}
