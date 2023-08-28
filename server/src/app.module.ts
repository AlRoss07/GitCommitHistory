/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitHistoryModule } from './commit-history/commit-history.module'; 

@Module({
  imports: [CommitHistoryModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}