var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var initialMarketSize = 5;
var nameCounter = 0;
var market =  new Array(initialMarketSize);

function agent(id, demandSlope, maxPrice, inventory, startCash) {
    this.Name = parseInt(id);
    this.Mfactor = parseFloat(demandSlope);
    this.MaxPrice = parseInt(maxPrice);
    this.Inventory = parseInt(inventory);
    this.Wallet = parseInt(startCash);
    this.Evaluate = function (price) {
        
    }
    this.Buy = function (price) {
        this.Inventory++;
        this.Wallet = this.Wallet - price;
    }
}

function addAgent() {
    var newSlope = Math.random() * (-5);
    var newMPrice = Math.floor( Math.random() * 101 );
    newAgent = agent( nameCounter, newSlope, newMPrice, 0, 1000);
    nameCounter++;
}

for (i=0; i < initialMarketSize; i++) {
    market.push(addAgent());
}