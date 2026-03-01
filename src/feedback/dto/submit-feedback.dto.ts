import { IsObject, IsOptional, IsString } from 'class-validator';

export class SubmitFeedbackDto {
    @IsObject()
    response_data: any;

    @IsString()
    @IsOptional()
    chat_id?: string;
}
