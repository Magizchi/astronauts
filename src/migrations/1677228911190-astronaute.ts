import { MigrationInterface, QueryRunner } from "typeorm"

export class astronaute1677228911190 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `astronaute`.`astronautes`(`id` SERIAL NOT NULL, `name` VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, `planet` TINYINT NOT NULL, INDEX`planetsId`(`planet`))")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `astronaute`.`astronautes` ")
    }

}
