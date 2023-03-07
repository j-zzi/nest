import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AwsService } from './aws.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [AwsService],
  exports: [AwsService],
})
export class AwsModule {}
