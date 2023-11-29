import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    let ids = [];
    for (let i=1; i<=3; i++){
      ids.push(i);
    }
    return { ids: ids};
  }

  @Get('compte/:id')
  @Render('compte')
  compte(@Param() params: any){
    console.log(params)
    return { id: params.id };
  }
  
}