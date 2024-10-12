/*
  Warnings:

  - You are about to drop the column `workTypeId` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `EmployeeTypeId` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_workTypeId_fkey";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "workTypeId",
ADD COLUMN     "EmployeeTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "EmployeeType" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "workTypeId" INTEGER,

    CONSTRAINT "EmployeeType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeBaseSchedule" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "employeeId" INTEGER NOT NULL,

    CONSTRAINT "EmployeeBaseSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeSlotSchedule" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "employeeId" INTEGER NOT NULL,

    CONSTRAINT "EmployeeSlotSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkRequest" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "employeeSlotScheduleId" INTEGER NOT NULL,
    "employeeWorkTypeId" INTEGER NOT NULL,

    CONSTRAINT "WorkRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeType_title_key" ON "EmployeeType"("title");

-- AddForeignKey
ALTER TABLE "EmployeeType" ADD CONSTRAINT "EmployeeType_workTypeId_fkey" FOREIGN KEY ("workTypeId") REFERENCES "EmployeeWorkType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_EmployeeTypeId_fkey" FOREIGN KEY ("EmployeeTypeId") REFERENCES "EmployeeType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeBaseSchedule" ADD CONSTRAINT "EmployeeBaseSchedule_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeSlotSchedule" ADD CONSTRAINT "EmployeeSlotSchedule_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkRequest" ADD CONSTRAINT "WorkRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkRequest" ADD CONSTRAINT "WorkRequest_employeeSlotScheduleId_fkey" FOREIGN KEY ("employeeSlotScheduleId") REFERENCES "EmployeeSlotSchedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkRequest" ADD CONSTRAINT "WorkRequest_employeeWorkTypeId_fkey" FOREIGN KEY ("employeeWorkTypeId") REFERENCES "EmployeeWorkType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
