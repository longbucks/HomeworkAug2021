class Item {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  item() {
    return `Hello welcome to frenzy shop. I see you want item ${this.id}, which is called ${this.name} amd costs ${this.price}`;
  }
}

class GameConsoles extends Item {
  constructor(id, name, price, type) {
    super(id, name, price);
    this.type = type;
  }
}

class VideoGames extends Item {
  constructor(id, name, price, rating) {
    super(id, name, price);
    this.rating = rating;
  }
}
