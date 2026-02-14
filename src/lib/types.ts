export interface Category {
	id: string;
	name: string;
	description: string;
	threadCount: number;
}

export interface Thread {
	id: string;
	categoryId: string;
	title: string;
	author: string;
	replyCount: number;
	createdAt: string;
}

export interface Post {
	id: string;
	author: string;
	body: string;
	createdAt: string;
}

export interface User {
	id: string;
	username: string;
	email: string;
}
