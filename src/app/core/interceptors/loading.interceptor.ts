import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const _NgxSpinnerService = inject(NgxSpinnerService);

  // ✅ وقت بداية الطلب
  const startTime = Date.now();

  _NgxSpinnerService.show();

  return next(req).pipe(
    finalize(() => {
      const elapsed = Date.now() - startTime;
      const minDuration = 1000; // أقل مدة لظهور الـ Spinner (ms)

      if (elapsed < minDuration) {
        // لو الطلب خلص بسرعة، نأخر الإخفاء
        setTimeout(() => _NgxSpinnerService.hide(), minDuration - elapsed);
      } else {
        // لو أخد وقت كفاية، نخفيه عادي
        _NgxSpinnerService.hide();
      }
    })
  );
};
