import { Controller, Param,  Get, Post, Delete, Patch, Body, Query} from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get('search')
    search(@Query("year") searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear}`;
    }
    
    @Get('/:id')
    getOne(@Param('id') movieId: string){
        return `This will return one movie with the id: ${movieId}`
    }

    @Post()
    create(@Body() movieData) {
        return movieData;
    }

    @Delete('/:id')
    remvoe(@Param('id') movieId: string){
        return `This will delete a movie width the id: ${movieId}`
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData){
        return {
            updatedMovie: movieId,
            ...updateData,
        }
    }
}
