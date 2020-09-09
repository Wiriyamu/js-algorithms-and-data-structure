function Stack() {
  let items = [];

  this.push = function (element) {
    items.push(element);
  };

  this.pop = function () {
    return items.pop();
  };

  this.peek = function () {
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    return items.length === 0;
  };

  this.clear = function () {
    items = [];
  };

  this.size = function () {
    return items.length;
  };

  this.print = function () {
    console.log(items.toString());
  };
}

const pilha = new Stack();

console.log(pilha.isEmpty());

pilha.push(5);
pilha.print();

pilha.push(8);
pilha.print();

pilha.push(11);
pilha.print();

pilha.push(15);
pilha.print();

// ========== //

pilha.pop();
pilha.print();

pilha.pop();
pilha.print();

pilha.pop();
pilha.print();

pilha.pop();
pilha.print();

console.log(pilha.isEmpty());
