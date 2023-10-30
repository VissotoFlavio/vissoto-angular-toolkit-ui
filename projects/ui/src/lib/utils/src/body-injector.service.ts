import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable } from '@angular/core';

@Injectable()
export class BodyInjectorService {
  constructor(private appRef: ApplicationRef) {}

  /* istanbul ignore next */
  stackBeforeAppRoot(componentRef: ComponentRef<unknown>, selector = 'app-root'): void {
    const domElement = this.createDomElement(componentRef);
    const appRoot = document.body.querySelector(selector);
    document.body.insertBefore(domElement, appRoot);
  }

  /* istanbul ignore next */
  private createDomElement(componentRef: ComponentRef<unknown>): HTMLElement {
    this.appRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<unknown>).rootNodes[0] as HTMLElement;
    return domElement;
  }
}
