import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPosts1626070360738 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //表名posts
        return await queryRunner.createTable(new Table(
        {
            name: 'posts',
            columns: [
            {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'title',
                type: 'varchar',
            },
            {
                name: 'content',
                type: 'text',
            },
            {
                name: 'author',
                type: 'varchar',
            },
            {
                name: 'create_time',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP',
            },
            ],
        }
        ));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.dropTable('posts');
    }
}