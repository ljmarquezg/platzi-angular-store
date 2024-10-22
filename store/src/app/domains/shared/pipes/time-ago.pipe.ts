import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: unknown): unknown {
    const now = new Date().getTime();
    let date = now;

    if(value instanceof Date) {
      date =  new Date(value).getTime();
    }
    if(typeof value === 'string') {
      date =  new Date(value).getTime();
    }

    if(typeof value === 'number') {
      date =  new Date(value).getTime();
    }

    const timeAgo = Math.abs(now - date);

    const seconds = Math.floor(timeAgo / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    switch(true) {
      case years > 0:
        return years === 1 ? 'hace un año' : `hace ${years} años`;
      case months > 0:
        return months === 1 ? 'hace un mes' : `hace ${months} meses`;
      case days > 0:
        return days === 1 ? 'hace un día' : `hace ${days} días`;
      case hours > 0:
        return hours === 1 ? 'hace una hora' : `hace ${hours} horas`;
      case minutes > 0:
        return minutes === 1 ? 'hace un minuto' : `hace ${minutes} minutos`;
      case seconds > 0:
        return seconds === 1 ? 'hace un segundo' : `hace ${seconds} segundos`;
      default:
        return 'justo ahora';
    }
  }

}
