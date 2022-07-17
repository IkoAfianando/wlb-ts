import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super({
            datasources: {
                db: {
                    url: "postgres://iytyebuy:60KWRI76EH-elPADwperJ7vSL57xjK1R@rosie.db.elephantsql.com/iytyebuy"
                }
            }
        })
    }
}
