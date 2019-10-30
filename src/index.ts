import { Observable } from "rxjs";

const observable = Observable.create((observer: any) => {
  observer.next("Hello world");
});

observable.subscribe((x: any) => console.log(x));
