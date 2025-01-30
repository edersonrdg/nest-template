import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();

    const requestLog = new Logger(`ApplicationRequest`);
    const now = Date.now();
    return next.handle().pipe(
      tap(() =>
        requestLog.log(`${req.method} ${req.url} ${Date.now() - now}ms`),
      ),
      catchError((error) => {
        requestLog.error(
          `${req.method} ${req.url} ${Date.now() - now}ms - Error: ${error.message}`,
        );
        throw error;
      }),
    );
  }
}
