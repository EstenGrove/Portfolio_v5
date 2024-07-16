// REQUIREMENTS:
// - May be overkill, but consider storing the projects in the database
//    - Would provide flexibility
export interface PictureSource {
	srcSet: HTMLSourceElement["srcset"];
	media?: HTMLSourceElement["media"];
	type?: HTMLSourceElement["type"];
}

export interface Project {
	title: string;
	desc: string;
	alt?: string;
	github?: string;
	listOfTech: string[];
	fallbackImgSrc: string;
	sourceList: PictureSource[];
	links: {
		github?: string;
		site?: string; // if it's hosted somewhere
	};
}

export type ProjectsList = Project[];
