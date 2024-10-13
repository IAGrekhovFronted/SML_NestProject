import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CreateRequestService {

    constructor(
        private prisma: PrismaService
    ) { }

    private async CreateSlotSchedule(data: Prisma.EmployeeSlotScheduleCreateInput) {
        const result = await this.prisma.employeeSlotSchedule.create(
            { data }
        );
        return result;
    }

    private async CreateRequest(data: Prisma.WorkRequestCreateInput) {
        const result = await this.prisma.workRequest.create(
            { data }
        );
        return result;
    }

    async getAvailableSlot(date: Date, userId: number, employeeWorkTypeId: number) {

        const employee = await this.prisma.employeeBaseSchedule.findFirst({
            where: {
                start: {
                    lte: date.toISOString()
                },
                end: {
                    gte: date.toISOString()
                },
            },
            select: {
                employeeId: true
            }
        });

        let SuccessRequest: boolean = false

        do {
            let startDate: Date = new Date(date);
            let endDate: Date = new Date(startDate);
            endDate.setHours(startDate.getHours() + 1);

            const slots = await this.prisma.employeeSlotSchedule.findMany({
                where: {
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString()
                }
            });

            if (slots.length === 0) {

                let sendDataSlotShedule: Prisma.EmployeeSlotScheduleCreateInput =
                {
                    startDate: startDate,
                    endDate: endDate,
                    employee: {
                        connect: { id: employee?.employeeId }
                    }
                };

                const createSlot = await this.CreateSlotSchedule(sendDataSlotShedule);

                let sendDataWorkRequest: Prisma.WorkRequestCreateInput =
                {
                    user: {
                        connect: { id: userId }
                    },
                    status: "WAITING",
                    employeeWorkType: {
                        connect: { id: employeeWorkTypeId }
                    },
                    slot: {
                        connect: { id:  createSlot.id }
                    }
                }
                
                await this.CreateRequest(sendDataWorkRequest)
                SuccessRequest = true;
            }

            date.setHours(date.getHours() + 1);
        } while (!SuccessRequest);
    }
}