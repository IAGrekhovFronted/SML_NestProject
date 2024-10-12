/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `EmployeeWorkType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EmployeeWorkType_title_key" ON "EmployeeWorkType"("title");
