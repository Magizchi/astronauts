import { MigrationInterface, QueryRunner } from "typeorm"

export class changePlanets1677709310156 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "UPDATE planets SET image = 'https://eleven-labs.com/static/images/planets/panda.png' WHERE planets.id;"
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
