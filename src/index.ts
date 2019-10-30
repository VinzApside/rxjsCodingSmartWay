import { Observable } from "rxjs";
import { share } from "rxjs/operators";

var observable1 = Observable.create((observer: any) => {
  observer.next("Observable One is alive!" + Date.now());
}).pipe(share());

document.getElementById("adbtn1").addEventListener("click", () => {
  const subscription1 = observable1.subscribe((x: any) => logItem(x, 1));
});
document.getElementById("adbtn2").addEventListener("click", () => {
  const subscription2 = observable1.subscribe((x: any) => logItem(x, 2));
});

function logItem(val: any, column: any) {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  if (column == 2) {
    document.getElementById("list2").appendChild(node);
  } else if (column === 1) {
    document.getElementById("list1").appendChild(node);
  }
}
