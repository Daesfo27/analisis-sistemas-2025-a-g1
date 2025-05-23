/*
  Warnings:

  - You are about to drop the column `icon` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `softSkill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "icon";

-- AlterTable
ALTER TABLE "softSkill" DROP COLUMN "icon";
