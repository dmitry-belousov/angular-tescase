export interface IRepoUser {
  username: string;
  avatar: string;
  href: string;
}

export interface IRepo {
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
  builtBy: Array<IUser>;
}

export interface IUser {
  followers: number;
}
