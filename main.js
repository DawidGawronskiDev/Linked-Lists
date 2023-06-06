import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("Gonna");
list.append("Give");
list.append("Up");
list.append("!");
list.pop();

list.prepend("Never");

list.insertAt("You", 3);

console.log(list.toString());
