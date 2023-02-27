import { MigrationInterface, QueryRunner } from "typeorm"

export class astronautes1677496029304 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "CREATE TABLE `astronautes` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `planetId` int NULL, PRIMARY KEY (`id`))"

        )

        await queryRunner.query(
            "ALTER TABLE `astronautes` ADD CONSTRAINT `FK_bb5b2487acc92b4e1e33329be9c` FOREIGN KEY (`planetId`) REFERENCES `planets`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION"
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
