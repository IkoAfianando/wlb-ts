import { Controller, Delete, Get, Param, ParseIntPipe, Post, Body, Patch } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
@UseGuards(JwtGuard)
@Controller('blog')
export class BlogController {
    constructor(
        private blogService: BlogService
    ) { }
    @Get()
    getBlog(@GetUser('id') userId: number) {
        return this.blogService.getBlogs(
            userId,
        );
    }

    @Get(':id')
    getBlogById(@GetUser('id') userId: number, @Param('id', ParseIntPipe) blogId: number) { }

    @Post()
    createBlog(
        @GetUser('id') userId: number,
        @Body() dto: CreateBlogDto,
    ) {
        return this.blogService.createBlog(
            userId,
            dto,
        );
    }

    @Patch()
    editBlogById(@GetUser('id') userId: number, @Body() dto: CreateBlogDto) { }

    @Delete()
    deleteBlogById(@GetUser('id') userId: number) { }

}
