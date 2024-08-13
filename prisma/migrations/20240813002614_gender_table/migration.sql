/*
  Warnings:

  - You are about to drop the column `student_id` on the `Contact` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[contact_id]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gender_id` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact_id` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender_id` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_student_id_fkey";

-- DropIndex
DROP INDEX "Contact_student_id_key";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "student_id";

-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "birthdate" VARCHAR(10),
ADD COLUMN     "gender_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "contact_id" TEXT NOT NULL,
ADD COLUMN     "gender_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Gender" (
    "id" VARCHAR(32) NOT NULL,
    "name" TEXT NOT NULL,
    "code" VARCHAR(8) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Gender_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gender_code_key" ON "Gender"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Student_contact_id_key" ON "Student"("contact_id");

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_gender_id_fkey" FOREIGN KEY ("gender_id") REFERENCES "Gender"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_gender_id_fkey" FOREIGN KEY ("gender_id") REFERENCES "Gender"("id") ON DELETE CASCADE ON UPDATE CASCADE;
