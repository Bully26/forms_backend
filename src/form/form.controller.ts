import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { SubmitFormDto } from './dto/submit-form.dto';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) { }

  @Post()
  create(@Body() createFormDto: CreateFormDto) {
    return this.formService.create(createFormDto);
  }

  @Get()
  findAll() {
    return this.formService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    return this.formService.update(id, updateFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formService.remove(id);
  }

  @Post(':id/submit')
  submit(@Param('id') id: string, @Body() submitFormDto: SubmitFormDto) {
    return this.formService.submit(id, submitFormDto);
  }

  @Get(':id/submissions')
  getSubmissions(@Param('id') id: string) {
    return this.formService.getSubmissions(id);
  }

  @Get('submission/:subId')
  getSubmissionDetails(@Param('subId') subId: string) {
    return this.formService.getSubmissionDetails(subId);
  }
}
