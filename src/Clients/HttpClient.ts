import type IHttpClient from "@/Contracts/IHttpClient";

export default class HttpClient implements IHttpClient {
  constructor(private _baseUrl: string) {
    //
  }

  async get<T>(path: string): Promise<T> {
    const url = this._baseUrl + path;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed fetching data from ${url}`);
    }

    return response.json();
  }
}
