import { MigrationInterface, QueryRunner } from "typeorm"

export class planets1677228964151 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "CREATE TABLE `astronaute`.`planets` (`id` INT PRIMARY KEY NOT NULL , `name` VARCHAR(250) NOT NULL , `image` VARCHAR(250) NULL )", undefined
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
        await queryRunner.query(
            "DROP TABLE `astronaute`.`planets`", undefined
        )
    }

}
