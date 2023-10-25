import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    let comptes = [];
    for (let i=1; i<=4; i++){
      comptes.push("compte"+i);
    }
    
    return { comptes: comptes};
  }

  @Get('compte1')
  @Render('compte1')
  compte1(){
    return {};
  }

  @Get('compte2')
  @Render('compte2')
  compte2(){
    return {};
  }

  @Get('compte3')
  @Render('compte3')
  compte3(){
    return {};
  }

  @Get('compte')
  @Render('compte')
  compte(){
    return {};
  }
  
}
