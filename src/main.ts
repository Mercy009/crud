import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //Para escribir mensajes en el logger
  const logger = new Logger();
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  
  await app.listen(3000);
  //Con ${ await app.getUrl()} 
  //en caso de que este conrriendo en una ip publica la capturaria y la imprimiria
  logger.log(`Server running ${ await app.getUrl()}`)

}
bootstrap();
