import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { VentaModule } from './venta/venta.module';

@Module({
  imports: [UserModule, ProductModule, VentaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
