export interface IRepoUser {
  username: string;
  avatar: string;
  href: string;
}

export interface IRepo {
  id: number;
  author: string;
  name: string;
  avatar: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  currentPeriodStars: number;
  builtBy:any;
}

export interface IUser {
  followers: number;
}

export interface AuthUser {
  login: string;
  password: string;
  id?: number | string;
  token?: string;
}