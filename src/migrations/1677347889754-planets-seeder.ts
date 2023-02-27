import { MigrationInterface, QueryRunner } from "typeorm"

export class planetsSeeder1677347889754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "CREATE TABLE `planets` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `image` varchar(255) NULL, PRIMARY KEY (`id`))"

        )
        await queryRunner.query(
            "INSERT INTO `planets` (`id`, `name`, `image`) VALUES (1, 'Duck Invaders', 'https://eleven-labs.com/static/images/planets/duck.png');"

        )
        await queryRunner.query(
            "INSERT INTO `planets` (`id`, `name`, `image`) VALUES (2, 'Raccoons of Asgard', 'https://eleven-labs.com/static/images/planets/racoon.png');"

        )
        await queryRunner.query(
            "INSERT INTO `planets` (`id`, `name`, `image`) VALUES (3, 'Donut Factory', 'https://eleven-labs.com/static/images/planets/cat.png');"

        )
        await queryRunner.query(
            "INSERT INTO `planets` (`id`, `name`, `image`) VALUES (4, 'Schizo Cats', 'https://eleven-labs.com/static/images/planets/cat.png');"

        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
