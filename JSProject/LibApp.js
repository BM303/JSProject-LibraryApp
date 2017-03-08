function Sneaker(oData){

  this.Brand = oData.Brand; //author
  this.Model = oData.Model; //title
  this.Cost = oData.Cost;
  this.Available = oData.Available;
  this.ReleaseDate = oData.date;
  this.id = oData.id;

  return this;

};
$(function(){
  window.sneaker1 = new Sneaker({Brand:"Nike", Model:"Presto", Cost:"190", Available:"Yes", date:"January 20, 2017", id:1});
  window.sneaker2 = new Sneaker({Brand:"Asics", Model:"Gel3", Cost:"180", Available:"false", date:"May 5, 2016", id:2});
  window.sneaker3 = new Sneaker({Brand:"Nike", Model:"AirForceOne", Cost:"160", Available:"true", date:"September 18, 2016", id:3});
  window.gSneakerLib = new SneakerLib();

});

var SneakerLib = function (){
this.sneakerCollection.push(window.sneaker1);
this.sneakerCollection.push(window.sneaker2);
this.sneakerCollection.push(window.sneaker3);

};

SneakerLib.prototype.sneakerCollection = new Array();


SneakerLib.prototype.addSneaker = function (sneaker){
    for(var i = 0; i < this.sneakerCollection.length; i++){
        if (this.sneakerCollection[i].id == sneaker.id){
          return "Sneaker Already In Library";
        }
      }
      var newSneaker = typeof this.sneakerCollection[0];
        newSneaker = sneaker;
          this.sneakerCollection.push(sneaker);
            return "Sneaker Added";
}

SneakerLib.prototype.addSneakers = function (sneakers){
  console.log(sneakers);
  for(var i = 0; i < sneakers.length; i++){
    this.addSneaker(sneakers[i]);
  }
  return "Sneakers Added"
}

SneakerLib.prototype.removeSneakerById = function (id){
  for(var i = 0; i < this.sneakerCollection.length; i++){
    if (this.sneakerCollection[i].id == id){
      this.sneakerCollection.splice(i, 1);
      }
    }
  return "Removed Model";
}

SneakerLib.prototype.removeSneakerByBrand = function (brand){
  for(var i = 0; i < this.sneakerCollection.length; i++){
      if (this.sneakerCollection[i].Brand == brand){
        this.sneakerCollection.splice(i, 1);
      }
    }
  return "Removed By Brand";
}

SneakerLib.prototype.getRandomSneaker = function (){
  return this.sneakerCollection[Math.floor(Math.random() * this.sneakerCollection.length)];
}

SneakerLib.prototype.getRandomModel = function (){
  return this.sneakerCollection[Math.floor(Math.random() * this.sneakerCollection.length)].Model;
}

SneakerLib.prototype.getBrands = function (brands){
  var array = brands.split(", ");
    var sneakerArray = new Array();
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < this.sneakerCollection.length; j++){
        if(array[i]== this.sneakerCollection[j].Brand){
          sneakerArray.push(this.sneakerCollection[j])
        }
      }
  }
  return sneakerArray;
}

SneakerLib.prototype.getModels = function (models){
  var array = models.split(", ");
    var sneakerArray = new Array();
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < this.sneakerCollection.length; j++){
        if(array[i]== this.sneakerCollection[j].Model){
          sneakerArray.push(this.sneakerCollection[j])
        }
      }
  }
  return sneakerArray;
}

SneakerLib.prototype.getBrands = function (brands){
  var array = brands.split(", ");
    var sneakerArray = new Array();
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < this.sneakerCollection.length; j++){
        if(array[i]== this.sneakerCollection[j].Brand){
          sneakerArray.push(this.sneakerCollection[j])
        }
      }
  }
  return sneakerArray;
}
