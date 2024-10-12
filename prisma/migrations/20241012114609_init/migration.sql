-- CreateTable
CREATE TABLE "EmployeeWorkType" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "EmployeeWorkType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "workTypeId" INTEGER,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_workTypeId_fkey" FOREIGN KEY ("workTypeId") REFERENCES "EmployeeWorkType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
