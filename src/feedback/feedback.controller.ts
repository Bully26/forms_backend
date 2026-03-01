import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { SubmitFeedbackDto } from './dto/submit-feedback.dto';
import { UpdateFeedbackStatusDto } from './dto/update-feedback.dto';

@Controller('feedback')
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) { }

    @Post(':formId')
    submitFeedback(
        @Param('formId') formId: string,
        @Body() submitFeedbackDto: SubmitFeedbackDto,
    ) {
        return this.feedbackService.submitFeedback(+formId, submitFeedbackDto.response_data);
    }

    @Get('form/:formId')
    getFormFeedbacks(@Param('formId') formId: string) {
        return this.feedbackService.getFormFeedbacks(+formId);
    }

    @Get(':id')
    getFeedbackDetails(@Param('id') id: string) {
        return this.feedbackService.getFeedbackDetails(+id);
    }

    @Patch(':id/status')
    updateFeedbackStatus(
        @Param('id') id: string,
        @Body() updateFeedbackStatusDto: UpdateFeedbackStatusDto,
    ) {
        return this.feedbackService.updateFeedbackStatus(+id, updateFeedbackStatusDto.status);
    }

    @Delete(':id')
    removeFeedback(@Param('id') id: string) {
        return this.feedbackService.removeFeedback(+id);
    }
}
