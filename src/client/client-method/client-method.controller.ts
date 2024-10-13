import { Controller, Post, Body } from '@nestjs/common';

import { CreateRequestService } from './create-request/create-request.service';

class RequestData {
    userId: number
    employeeWorkTypeId: number
}

@Controller('client')
export class ClientMethodController {
    constructor(
        private createRequest: CreateRequestService
    ) { }

    @Post('CreateRequest')
    CreateRequest(@Body() data: RequestData) {
        let now: Date = new Date()
        let _date: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0);

        const { userId, employeeWorkTypeId } = data

        return this.createRequest.getAvailableSlot
            (_date,
                userId,
                employeeWorkTypeId
            )
    }
}