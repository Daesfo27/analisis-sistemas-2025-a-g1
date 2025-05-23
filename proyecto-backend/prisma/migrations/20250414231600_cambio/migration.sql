/*
  Warnings:

  - You are about to drop the `Activity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Education` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Language` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Resume` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `softSkill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Activity";

-- DropTable
DROP TABLE "Blog";

-- DropTable
DROP TABLE "Education";

-- DropTable
DROP TABLE "Experience";

-- DropTable
DROP TABLE "Language";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "Resume";

-- DropTable
DROP TABLE "Skill";

-- DropTable
DROP TABLE "softSkill";

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "codigoLibro" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "propietario" INTEGER NOT NULL,
    "disponibilidad" TEXT NOT NULL DEFAULT 'available',
    "creado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
