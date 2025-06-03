import { Controller, Get, Query, Param, Headers, Body, Post, HttpCode, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

    @Post('/ejemplo/:id') // /ejemplo/1?hola=mundo
    @HttpCode(200)
    ejemplo(
      @Param('id') id, // Parametro de Ruta
      @Query('hola') hola, // Parametro de consulta llamado 'hola'
      @Headers('escuela') escuela, // Cabecera con nombre 'escuela'
      @Body('monto') monto, // Cuerpo con contenido 'monto'
  ): string {
    return id + hola + ' Funcionando ' + escuela + monto
    // if(){}else{
    // throw NotFoundException('No encontrado')}
  }

  @Get('/casa')
  @HttpCode(200)
  ejercicio(
    @Query('idCasa') idCasa,
  ): string{
    const casa:Object[] = [{id:1, nombre:"Casa1"}, {id:2, nombre:"Casa2"}];
    if(idCasa == 1 || idCasa == 2){
      return JSON.stringify(casa[idCasa-1]); 
    }else{
      throw new NotFoundException('No encontrado'); 
    }
  }

}
