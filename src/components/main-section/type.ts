export type Input = {
  url: string;
};

export type Url = {
  longUrl: string;
  shortUrl: string;
};

export type Urls = Array<{
  longUrl: string;
  shortUrl: string;
  copied: boolean;
}>;
