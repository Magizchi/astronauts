import { MigrationInterface, QueryRunner } from "typeorm"

export class renameAstronauts1677708786442 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "RENAME TABLE `astronautes` TO `astronauts`"
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
