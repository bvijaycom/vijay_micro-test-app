import { NgModule } from '@angular/core';

import { VijaymicrotestappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [VijaymicrotestappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [VijaymicrotestappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class VijaymicrotestappSharedCommonModule {}
