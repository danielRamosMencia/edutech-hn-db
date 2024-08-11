/*
  Warnings:

  - You are about to drop the column `deparment_id` on the `Municipality` table. All the data in the column will be lost.
  - Added the required column `department_id` to the `Municipality` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Municipality" DROP CONSTRAINT "Municipality_deparment_id_fkey";

-- AlterTable
ALTER TABLE "Municipality" DROP COLUMN "deparment_id",
ADD COLUMN     "department_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Municipality" ADD CONSTRAINT "Municipality_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;
