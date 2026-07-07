import axios, {
  AxiosInstance,
} from 'axios';


export class DevialetClient {

  private readonly http: AxiosInstance;


  constructor(
    host: string,
  ) {

    this.http = axios.create({
      baseURL:
        `http://${host}/ipcontrol/v1`,
      timeout: 3000,
    });

  }


  async getVolume(): Promise<number> {

    const response =
      await this.http.get(
        '/systems/current/sources/current/soundControl/volume',
      );

    return response.data.volume;

  }


  async setVolume(
    volume: number,
  ): Promise<void> {

    await this.http.post(
      '/systems/current/sources/current/soundControl/volume',
      {
        volume,
      },
    );

  }

}
