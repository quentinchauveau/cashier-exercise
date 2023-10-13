import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import Handlebars from 'handlebars';

@Injectable()
export class HandlebarMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    Handlebars.registerHelper('isUrlActive', function (value) {
      return req.originalUrl == value || req.originalUrl.includes(value + '/');
    });
    Handlebars.registerHelper('times', function (n, block) {
      let accum = '';
      for (let i = 0; i < n; ++i) accum += block.fn(i);
      return accum;
    });
    next();
  }
}
