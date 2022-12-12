import { Body, Controller, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { Console } from 'console';
import { CreatereptileDto } from './Dto/controller-reptile.dto';

@Controller('reptile')
export class ReptileController {

    @Get()
    creat(): string {
        return `This action retuns all insects`;
    }

    @Post()
    async create(@Body() createreptiledto : CreatereptileDto ) {
        return `This action adds a new insects, ${createreptiledto.name}`;
    }
   
    @Put(':id')
    update (@Param('id') id:string, @Body() createreptiledto: CreatereptileDto) {
      return `This action updates a #${id} dog`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action remove a #${id} dog`;
    }

}



