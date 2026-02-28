import { Controller } from '@nestjs/common';
import { FormService } from './form.service';

/*
functional requirement 

options

create form with limits 
  get auth token integrate it by himself 
  get url link for form which he can use

delete form


update form limits
 upgrade summission limit etc 


get info about some form with id x


get all forms 



*/


@Controller('form')
export class FormController {
 constructor (private readonly formService: FormService){}
 
 @Post('/submit')
 async createform()
 {
   // create form with limits
   await this.formService.createform()
 }

 @Get('/csv')
 async getformcsv()
 {
   // get form from db with this user id
   await this.formService.getformcsv()
 }


 @Get('/token')
 async getformtoken()
 {
   // get form from db with this user id
   await this.formService.getformtoken()
 }
 
 @Get('/url ')
 async getformurl()
 {
   // get form from db with this user id
   await this.formService.getformurl()
 }

 @Get('/all')
 async getallforms()
 {
   // get all forms from db with this user id
   await this.formService.getallforms()
 }

 @Delete('/delete')
 async deleteform()
 {
   // delete form from db with this user id
   await this.formService.deleteform()
 }

 @Put('/update')
 async updateform()
 {
   // update form from db with this user id
   await this.formService.updateform()
 }
}
