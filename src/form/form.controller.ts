import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { SubmitFormDto } from './dto/submit-form.dto';

@Controller('form')
export class FormController {
  @Post()
  create(@Body() createFormDto: CreateFormDto) {
    return { message: 'Create a new form', data: createFormDto };
  }

  @Get()
  findAll() {
    return { message: 'List forms created by the user' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { message: `Get details of a specific form ${id} (with schema)` };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    return { message: `Update form ${id}`, data: updateFormDto };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { message: `Delete a form ${id}` };
  }

  @Post(':id/submit')
  submit(@Param('id') id: string, @Body() submitFormDto: SubmitFormDto) {
    return {
      message: `Public endpoint to submit a form response for form ${id}`,
      data: submitFormDto,
    };
  }

  @Get(':id/submissions')
  getSubmissions(@Param('id') id: string) {
    return {
      message: `Get all submissions for specific form ${id} (owner only)`,
    };
  }

  @Get('submission/:subId')
  getSubmissionDetails(@Param('subId') subId: string) {
    return { message: `Get a specific submission details for subId ${subId}` };
  }
}
