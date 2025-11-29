import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as flash from 'express-flash';
import * as exphbs from 'express-handlebars';
import * as session from 'express-session';
import * as methodOverride from 'method-override';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const hbs = exphbs.create({
    extname: '.hbs',
    layoutsDir: join(__dirname, '..', 'src', 'views', '_layouts'),
    partialsDir: join(__dirname, '..', 'src', 'views', '_partials'),
    defaultLayout: 'main',
  });

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src', 'views'));

  app.engine('.hbs', hbs.engine);
  app.setViewEngine('hbs');

  app.use(methodOverride('_method'));
  app.use(flash());
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );

  await app.listen(3333, () =>
    Logger.log(`Running on http://localhost:3333`, 'Bootstrap'),
  );
}
bootstrap();
