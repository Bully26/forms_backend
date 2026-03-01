import { IsInt, Min, Max } from 'class-validator';

export class UpdateFeedbackStatusDto {
    @IsInt()
    @Min(-1)
    @Max(1)
    status: number;
}
