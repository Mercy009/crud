import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ok } from 'assert';

@Controller('post')
export class PostController {

    //Optener todos 
    @Get()
    getMany(){
        return 'OK';
    }

    //READ
    @Get(':id')
    getOne(@Param('id') id: string){
        return{
            message: 'getOne'
        }
    }

    //CREATE
    @Post()
    createOne(){}


    //EDIT
    @Put(':id')
    editOne(@Param('id') id: string){}


    //DELETE
    @Delete(':id')
    deleteOne(@Param('id') id: string){}

}
