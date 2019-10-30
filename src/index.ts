import { Observable } from "rxjs";

const observable1 = Observable.create((observer: any) => {
  observer.next("Observable one is alive");
  let count = 0;
  setInterval(() => {
    observer.next(`Observable ${count}`);
    ++count;
  }, 5000);
});

const observable2 = Observable.create((observer: any) => {
  observer.next("Observable two is alive");
  let count = 0;
  setInterval(() => {
    observer.next(`Observable ${count}`);
    ++count;
  }, 2500);
});

const subscription1 = observable1.subscribe((x: any) => logItem(x, 1));
const subscription2 = observable2.subscribe((x: any) => logItem(x, 2));

document.getElementById("unbtn1").addEventListener("click", () => {
  subscription1.unsubscribe();
});
document.getElementById("unbtn2").addEventListener("click", () => {
  subscription2.unsubscribe();
});

document.getElementById("adbtn1").addEventListener("click", () => {
  subscription1.subscribe();
});
document.getElementById("adbtn2").addEventListener("click", () => {
  subscription2.add(subscription1);
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
