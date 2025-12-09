"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const flash = require("express-flash");
const exphbs = require("express-handlebars");
const session = require("express-session");
const methodOverride = require("method-override");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const hbs = exphbs.create({
        extname: '.hbs',
        layoutsDir: (0, path_1.join)(__dirname, '..', 'src', 'views', '_layouts'),
        partialsDir: (0, path_1.join)(__dirname, '..', 'src', 'views', '_partials'),
        defaultLayout: 'main',
    });
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'src', 'views'));
    app.engine('.hbs', hbs.engine);
    app.setViewEngine('hbs');
    app.use(methodOverride('_method'));
    app.use(flash());
    app.use(session({
        secret: 'my-secret',
        resave: false,
        saveUninitialized: false,
    }));
    await app.listen(3333, () => common_1.Logger.log(`Running on http://localhost:3333`, 'Bootstrap'));
}
bootstrap();
//# sourceMappingURL=main.js.map