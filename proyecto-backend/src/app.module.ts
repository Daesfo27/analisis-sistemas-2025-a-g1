import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { ListingModule } from './listing/listing.module';
import { ExchangeModule } from './exchange/exchange.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [BookModule, UserModule, ListingModule, ExchangeModule, MessageModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
