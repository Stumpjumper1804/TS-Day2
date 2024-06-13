"use strict";
// Advanced Exercises Exercise 1
// Create an App that has to offer four different types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price
// ● Create a Parent Class called Vehicles
// ● Define properties and methods for the super Class
// ● Consider the inheritance concept
// ● Define 2 other Child classes and name them Motorbikes and Trucks
// ● Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula)
class Vehicle {
    constructor(type, km, fuel, yearOfProd, listPrice, brand, model) {
        this.type = type;
        this.km = km;
        this.fuel = fuel;
        this.yearOfProd = yearOfProd;
        this.listPrice = listPrice;
        this.brand = brand;
        this.model = model;
    }
    calculatePrice() {
        let currYear = new Date().getFullYear();
        let price = this.listPrice - (currYear - this.yearOfProd) * 100 - this.km / 100;
        return price;
    }
}
class Motorbike extends Vehicle {
    constructor(type, km, fuel, yearOfProd, listPrice, brand, model, ABS, ccm) {
        super(type, km, fuel, yearOfProd, listPrice, brand, model);
        this.ABS = ABS;
        this.ccm = ccm;
    }
}
class Truck extends Vehicle {
    constructor(type, km, fuel, yearOfProd, listPrice, brand, model, wheels, weight, turbo) {
        super(type, km, fuel, yearOfProd, listPrice, brand, model);
        this.wheels = wheels;
        this.weight = weight;
        this.turbo = turbo;
    }
}
let catalog = [];
let kawasaki = new Motorbike("Motorbike", 23000, "gasoline", 2016, 12000, "Kawasaki", "Ninja", true, 650);
catalog.push(kawasaki);
let ducati = new Motorbike("Motorbike", 41000, "gasoline", 2019, 15000, "Ducati", "Monster", true, 800);
catalog.push(ducati);
let honda = new Motorbike("Motorbike", 50000, "gasoline", 2021, 17000, "Honda", "Transalp", true, 1000);
catalog.push(honda);
let rangeRover = new Truck("Truck", 67000, "Diesel", 2017, 70000, "Range Rover", "Explorer", 6, 16, true);
catalog.push(rangeRover);
let mercedes = new Truck("Truck", 34000, "Diesel", 2018, 89000, "Mercedes", "Transporter", 8, 23, true);
catalog.push(mercedes);
let mitsu = new Truck("Truck", 120000, "gasoline", 2022, 56000, "Mitsubishi", "Avenger", 8, 32, false);
catalog.push(mitsu);
console.log(catalog);
//render function
for (let vehicle of catalog) {
    let catalogAnchor = document.getElementById("car-list");
    catalogAnchor.innerHTML += `
  <div class="border border-danger border-2">
        <div class="card my-2 mx-auto p-2 w-100" style="width: 18rem;">
        <img src="bike-1836962_640.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${vehicle.brand} ${vehicle.model}</h5>
                <p class="card-text">For more information on this vehicle, please click the button.</p>
                <a href="#modal-container" class="btn btn-primary info-btn">More info</a>
            </div>
        </div>
  </div>`;
}
//add click events to buttons to open model
let buttons = document.querySelectorAll(".info-btn");
buttons.forEach((element, i) => {
    element.addEventListener("click", () => {
        const modalAnchor = document.getElementById("modal-container");
        modalAnchor.innerHTML = `
    <div>
      <div class="card">
        <img src="bike-1836962_640.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${catalog[i].brand} ${catalog[i].model}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="close-btn btn btn-primary">Close</a>
        </div>
      </div>
  </div>`;
    });
    // const closeBtn = document.querySelector(".close-btn") as HTMLElement
});
