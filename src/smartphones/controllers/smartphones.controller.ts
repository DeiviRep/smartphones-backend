import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Header,
} from '@nestjs/common';
import { SmartphonesService } from '../services/smartphones.service';

@Controller('api/smartphones')
export class SmartphonesController {
  constructor(private readonly phoneService: SmartphonesService) {}

  @Get()
  @Header('Cache-Control', 'no-cache, no-store, must-revalidate')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  async getAll() {
    const smartphones = await this.phoneService.findAll();
    const filteredSmartphones = smartphones.filter(
      (smartphone) => smartphone.estado === false,
    );
    return filteredSmartphones;
  }

  @Get(':id')
  @Header('Cache-Control', 'no-cache, no-store, must-revalidate')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  async getOne(@Param('id') id: number) {
    const smartphone = await this.phoneService.findOne(id);
    if (smartphone && smartphone.estado === true) {
      return { data: 'No existe el producto' };
    }
    return smartphone;
  }

  @Post()
  create(@Body() body: any) {
    return this.phoneService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.phoneService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.phoneService.delete(id);
  }
}
