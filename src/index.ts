import { Observable } from "rxjs";

const observable = Observable.create((observer: any) => {
  observer.next("Hello world");
  observer.next("Hello again");
  observer.next("that's work! ");
  observer.complete();
  observer.next("that's not work!!!!!!");
});

observable.subscribe(
  (x: any) => logItem(x),
  (error: any) => logItem(`Error: ${error}`),
  () => logItem("Completed")
);

function logItem(val: any) {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("list").appendChild(node);
}
