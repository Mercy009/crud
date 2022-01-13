import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ok } from 'assert';
import { CreatePostDto, EditPostDto } from './dtos';
import { PostService } from './post.service';


@Controller('post')
export class PostController {

    constructor(private readonly postService: PostService){}

    //Optener todos 
    @Get()
    async getMany(){
        const data = this.postService.getMany();
        return data;
    }

    //READ
    @Get(':id')
    //ParseIntPipe es para transformar la variable id en Int, por default esta en string
    getOne(@Param('id', ParseIntPipe) id: number){
        return this.postService.getOne(id);
    }

    //CREATE
    @Post()
    createOne(
        @Body() dto: CreatePostDto
    ){
        return this.postService.createOne(dto)
    }


    //EDIT
    @Put(':id')
    editOne(
        @Param('id') id: number,
        @Body() dto: EditPostDto
        
    ){
        return this.postService.editOne(id, dto)
    }


    //DELETE
    @Delete(':id')
    deleteOne(@Param('id') id: number){
        return this.postService.deleteOne(id)
    }

}
