import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { SubmitFormDto } from './dto/submit-form.dto';

@Injectable()
export class FormService {
  create(createFormDto: CreateFormDto) {
    return { message: 'Create a new form', data: createFormDto };
  }

  findAll() {
    return { message: 'List forms created by the user' };
  }

  findOne(id: string) {
    return { message: `Get details of a specific form ${id} (with schema)` };
  }

  update(id: string, updateFormDto: UpdateFormDto) {
    return { message: `Update form ${id}`, data: updateFormDto };
  }

  remove(id: string) {
    return { message: `Delete a form ${id}` };
  }

  submit(id: string, submitFormDto: SubmitFormDto) {
    return {
      message: `Public endpoint to submit a form response for form ${id}`,
      data: submitFormDto,
    };
  }

  getSubmissions(id: string) {
    return {
      message: `Get all submissions for specific form ${id} (owner only)`,
    };
  }

  getSubmissionDetails(subId: string) {
    return { message: `Get a specific submission details for subId ${subId}` };
  }
}
