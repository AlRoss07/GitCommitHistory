/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitHistoryModule } from './commit-history/commit-history.module'; // Import the module

@Module({
  imports: [CommitHistoryModule], // Add the module here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}