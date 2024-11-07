function contact(name, number) {
    this.name = name;
    this.number = number;
    
    // Print method showing name and number on console
    this.print = function() {
        console.log(this.name + ": " + this.number);
    };
}

// Creation of contact objects
var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);

// Call to the print method for displaying information
a.print(); 
b.print(); 
