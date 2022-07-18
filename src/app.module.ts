import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { BlogModule } from './blog/blog.module';
import { DefaultModule } from './default/default.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), AuthModule, UserModule, PrismaModule, BlogModule, DefaultModule],
})
export class AppModule { }
