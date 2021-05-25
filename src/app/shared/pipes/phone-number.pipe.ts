import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(phone: any): string {
    const str = `${phone}`.trim();
    // @ts-ignore
    const res = str.match(/\d/g).join('');
    if (res.startsWith('38')){
      return `+${res.slice(0, 3)} (${res.slice(3, 5)}) ${res.slice(5, 8)}-${res.slice(8, 10)}-${res.slice(10)}`;
    }
    else{
      return `+38${res.slice(0, 1)} (${res.slice(1, 3)}) ${res.slice(3, 6)}-${res.slice(6, 8)}-${res.slice(8)}`;
    }
  }

}
