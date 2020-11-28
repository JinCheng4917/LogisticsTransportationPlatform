import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0:
        return `未揽收`;
        break;
      case 1:
        return `已揽收`;
        break;
      case 2:
        return `运输中`;
        break;
      case 3:
        return `已送达`;
        break;
      case 4:
        return `已完成`;
        break;
    }
  }
}
