import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateBlogDto } from './dto/create-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogService {
    constructor(private prisma: PrismaService) { }


    getBlogs(userId: number) {
        return this.prisma.blog.findMany({
            where: {
                userId,
            },
        });
    }

    getBlogById(userId: number, blogId: number) {


    }

    async createBlog(userId: number, dto: CreateBlogDto) {
        const blog =
            await this.prisma.blog.create({
                data: {
                    userId,
                    ...dto,
                },
            });

        return blog;
    }

    editBlogById(userId: null, dto: CreateBlogDto) { }

    deleteBlogById(userId: number, blogId: number) { }
}
