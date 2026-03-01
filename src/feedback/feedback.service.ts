import { Injectable, NotFoundException } from '@nestjs/common';
import { prisma } from '../prisma';

@Injectable()
export class FeedbackService {
    async submitFeedback(formId: number, responseData: any) {
        try {
            const form = await prisma.form.findUnique({ where: { id: formId } });
            if (!form) {
                throw new NotFoundException(`Form with ID ${formId} not found`);
            }
            if (!form.is_active) {
                throw new Error(`Form with ID ${formId} is currently inactive`);
            }

            const submission = await prisma.formSubmission.create({
                data: {
                    form_id: formId,
                    response_data: responseData,
                },
            });

            return {
                message: 'Feedback submitted successfully',
                data: submission,
            };
        } catch (error) {
            console.error('Error submitting feedback:', error);
            throw error;
        }
    }

    async getFormFeedbacks(formId: number) {
        try {
            const form = await prisma.form.findUnique({ where: { id: formId } });
            if (!form) {
                throw new NotFoundException(`Form with ID ${formId} not found`);
            }

            const submissions = await prisma.formSubmission.findMany({
                where: { form_id: formId },
            });

            return {
                message: 'Feedbacks retrieved successfully',
                data: submissions,
            };
        } catch (error) {
            console.error('Error retrieving feedbacks:', error);
            throw error;
        }
    }

    async getFeedbackDetails(feedbackId: number) {
        try {
            const submission = await prisma.formSubmission.findUnique({
                where: { id: feedbackId },
            });

            if (!submission) {
                throw new NotFoundException(`Feedback with ID ${feedbackId} not found`);
            }

            return { message: 'Feedback details retrieved', data: submission };
        } catch (error) {
            console.error('Error retrieving feedback details:', error);
            throw error;
        }
    }

    async updateFeedbackStatus(feedbackId: number, status: number) {
        try {
            const submission = await prisma.formSubmission.findUnique({
                where: { id: feedbackId },
            });

            if (!submission) {
                throw new NotFoundException(`Feedback with ID ${feedbackId} not found`);
            }

            const updated = await prisma.formSubmission.update({
                where: { id: feedbackId },
                data: { status },
            });

            return { message: 'Feedback status updated', data: updated };
        } catch (error) {
            console.error('Error updating feedback status:', error);
            throw error;
        }
    }

    async removeFeedback(feedbackId: number) {
        try {
            const submission = await prisma.formSubmission.findUnique({
                where: { id: feedbackId },
            });

            if (!submission) {
                throw new NotFoundException(`Feedback with ID ${feedbackId} not found`);
            }

            await prisma.formSubmission.delete({
                where: { id: feedbackId },
            });

            return { message: 'Feedback deleted successfully' };
        } catch (error) {
            console.error('Error deleting feedback:', error);
            throw error;
        }
    }
}
