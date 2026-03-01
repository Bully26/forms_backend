import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { SubmitFormDto } from './dto/submit-form.dto';
import { prisma } from '../prisma';

@Injectable()
export class FormService {
  async create(createFormDto: CreateFormDto) {
    try {
      const form = await prisma.form.create({
        data: {
          user_id: createFormDto.user_id,
          name: createFormDto.name,
          description: createFormDto.description,
          max_submissions_total: createFormDto.max_submissions_total,
          submission_limit_per_user: createFormDto.submission_limit_per_user,
          fields_schema: createFormDto.fields_schema,
          config_context: createFormDto.config_context,
          ttl_interval: createFormDto.ttl_interval,
          is_active: createFormDto.is_active ?? true,
        },
      });
      return { message: 'Form created successfully', data: form };
    } catch (error) {
      console.error('Error creating form:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      const forms = await prisma.form.findMany();
      return { message: 'Forms retrieved successfully', data: forms };
    } catch (error) {
      console.error('Error retrieving forms:', error);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const form = await prisma.form.findUnique({
        where: { id: parseInt(id, 10) },
      });
      if (!form) {
        throw new NotFoundException(`Form with ID ${id} not found`);
      }
      return { message: 'Form retrieved successfully', data: form };
    } catch (error) {
      console.error('Error retrieving form:', error);
      throw error;
    }
  }

  async update(id: string, updateFormDto: UpdateFormDto) {
    try {
      const formId = parseInt(id, 10);
      const existingForm = await prisma.form.findUnique({ where: { id: formId } });
      if (!existingForm) {
        throw new NotFoundException(`Form with ID ${id} not found`);
      }

      const form = await prisma.form.update({
        where: { id: formId },
        data: updateFormDto,
      });
      return { message: 'Form updated successfully', data: form };
    } catch (error) {
      console.error('Error updating form:', error);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const formId = parseInt(id, 10);
      const existingForm = await prisma.form.findUnique({ where: { id: formId } });
      if (!existingForm) {
        throw new NotFoundException(`Form with ID ${id} not found`);
      }

      await prisma.form.delete({
        where: { id: formId },
      });
      return { message: 'Form deleted successfully' };
    } catch (error) {
      console.error('Error deleting form:', error);
      throw error;
    }
  }

  async submit(id: string, submitFormDto: SubmitFormDto) {
    try {
      const formId = parseInt(id, 10);
      const form = await prisma.form.findUnique({ where: { id: formId } });
      if (!form) {
        throw new NotFoundException(`Form with ID ${id} not found`);
      }
      if (!form.is_active) {
        throw new Error(`Form with ID ${id} is currently inactive`);
      }

      const submission = await prisma.formSubmission.create({
        data: {
          form_id: formId,
          response_data: submitFormDto.response_data,
        },
      });

      return {
        message: 'Form submitted successfully',
        data: submission,
      };
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    }
  }

  async getSubmissions(id: string) {
    try {
      const formId = parseInt(id, 10);
      const form = await prisma.form.findUnique({ where: { id: formId } });
      if (!form) {
        throw new NotFoundException(`Form with ID ${id} not found`);
      }

      const submissions = await prisma.formSubmission.findMany({
        where: { form_id: formId },
      });

      return {
        message: 'Submissions retrieved successfully',
        data: submissions,
      };
    } catch (error) {
      console.error('Error retrieving submissions:', error);
      throw error;
    }
  }

  async getSubmissionDetails(subId: string) {
    try {
      const submissionId = parseInt(subId, 10);
      const submission = await prisma.formSubmission.findUnique({
        where: { id: submissionId },
      });

      if (!submission) {
        throw new NotFoundException(`Submission with ID ${subId} not found`);
      }

      return { message: 'Submission details retrieved', data: submission };
    } catch (error) {
      console.error('Error retrieving submission details:', error);
      throw error;
    }
  }
}
