import type IHttpClient from "@/js/Classes/Contracts/IHttpClient";
import HttpError from "@/js/Classes/Errors/HttpError";

export default class HttpClient implements IHttpClient {
  constructor(private _baseUrl: string) {
    //
  }

  async get<T>(path: string): Promise<T> {
    const url = this._baseUrl + path;
    const response = await fetch(url);

    if (!response.ok) {
      throw new HttpError(response.status, url);
    }

    return response.json();
  }
}
