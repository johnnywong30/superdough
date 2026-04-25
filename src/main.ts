import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import SwaggerConstants from './constants/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger doc setup
  const swaggerDocConfig = new DocumentBuilder()
    .setTitle(SwaggerConstants.TITLE)
    .setDescription(SwaggerConstants.DESCRIPTION)
    .setVersion(SwaggerConstants.VERSION)
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerDocConfig);
  SwaggerModule.setup('swagger', app, swaggerDoc);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
