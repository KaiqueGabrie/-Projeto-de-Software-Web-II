import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('home')
  home() {
    return {
      title: 'Início',
      bodyClass: '',
      page: 'home',
    };
  }

  @Get('menu')
  @Render('menu')
  menu() {
    return {
      title: 'Cardápio',
      bodyClass: 'sub_page',
      page: 'menu',
    };
  }

  @Get('sobre')
  @Render('sobre')
  sobre() {
    return {
      title: 'Sobre nós',
      bodyClass: 'sub_page',
      page: 'sobre',
    };
  }

  @Get('reservas')
  @Render('book')
  reservas() {
    return {
      title: 'Reservas',
      bodyClass: 'sub_page',
      page: 'reservas',
    };
  }

  @Get('carrinho')
  @Render('cart')
  carrinho() {
    return {
      title: 'Carrinho',
      bodyClass: 'sub_page',
      page: 'carrinho',
    };
  }
}
