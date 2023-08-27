/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CommitHistoryController } from './commit-history.controller';

@Module({
  controllers: [CommitHistoryController],
})
export class CommitHistoryModule {}
