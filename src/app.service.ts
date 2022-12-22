import { Inject, Injectable } from '@nestjs/common';
import { MINIO_CONNECTION } from 'nestjs-minio';
import { Client } from 'minio'

@Injectable()
export class AppService {

  constructor(@Inject(MINIO_CONNECTION) private readonly client: Client) {}
  
  getHello(): string {
    return 'Hello World!';
  }
}
