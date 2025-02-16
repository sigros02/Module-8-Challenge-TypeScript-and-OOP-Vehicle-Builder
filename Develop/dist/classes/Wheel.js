// Wheel class that defines the properties of a wheel
class Wheel {
    // Constructor for the Wheel class
    constructor(diameter = 18, tireBrand = "GoodYear") {
        this.diameter = diameter;
        this.tireBrand = tireBrand;
    }
    // Getter methods for the properties of the Wheel class
    get getDiameter() {
        return this.diameter;
    }
    get getTireBrand() {
        return this.tireBrand;
    }
    // Setter method for the diameter property
    set setDiameter(diameter) {
        this.diameter = diameter;
    }
    set setTireBrand(tireBrand) {
        this.tireBrand = tireBrand;
    }
}
// Export the Wheel class
export default Wheel;
