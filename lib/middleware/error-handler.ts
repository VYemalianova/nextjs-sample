import { NextResponse } from 'next/server';

import { HttpError } from '@/lib/types/http-error';
import { ApiHandler } from '@/lib/types/api';

export function withErrorHandler<T>(handler: ApiHandler<T>): ApiHandler<T> {
  return async (request, context) => {
    try {
      return await handler(request, context);
    } catch (err: unknown) {
      if (err instanceof HttpError) {
        return NextResponse.json({
          success: false,
          errors: err.errors ?? err.message,
        }, { status: err.statusCode });
      }

      console.error('Unhandled API Error:', err);

      return NextResponse.json({
        success: false,
        errors: 'Internal Server Error',
      }, { status: 500 });
    }
  };
}
