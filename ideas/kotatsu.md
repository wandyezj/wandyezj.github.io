# Kotatsu

Build a wood table.

Design for 4-6 people to sit comfortably in a hexagon.

Want to allow a blanket to placed underneath the table held by the table top

Want a light golden color

What about a glass top?
1/2 inch thick

Round Table Top
Round Legs

- round so there are no sharp edges to bump into

Diameter: 100cm

Table:

Height: 30-40 cm
Diameter: 100cm

Table Top:

Diameter: 100cm
Table Top Thickness: 2 cm (1/2 - 3/4 inches)

Table Base:

Square Diagonal:
Square Side:
Leg Diameter:


Use magnets to hold the table top to the base.

Neodium Magnets

Have the base be constructed in a square shape.

Four legs and four supports.

Table top should be constructed of hard wood that is resistant to scratches and dents.

Need to draw out complete table design and all manufacturing techniques before construction.

How to stain the table? Want a nice stain and a nice varnish to protect the table

Type of wood?

Maple
Oak
Ipe

## Table Model

SCAD

```scad

// Kotatsu Design

// Resolution Control
$fa = 1;
$fs = 0.4;


table_top_diameter_cm = 100;
table_top_thickness_cm = 2;

table_leg_diameter_cm = 4;
table_leg_height_cm = 30;

// Distance between table legs
table_leg_distance_between = 100;

// Top of the table top
table_top_z = 100;

// Table Top
translate([0, 0, table_top_z])
    cylinder(
    h=table_top_thickness_cm,
    r=table_top_diameter_cm,
    center=true);

// Need four table legs arranged in a square

// Table Leg
// Make this a function
cylinder(
    h=table_leg_height_cm,
    r=table_leg_diameter_cm,
    center=true);
    
    
legs = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
];

for ( i = [ 0 : len(legs)]) {
    //echo(i);
    //echo(legs[i]);
    leg = legs[i];
    echo(leg);
    d = table_leg_distance_between / 2;
    dx = leg[0] * d;
    dy = leg[1] * d;
    echo(dx);
    echo(dy);
    
    // Draw the leg
    translate([dx, dy,
    table_top_z 
    - table_leg_height_cm
    - table_top_thickness_cm])
        cylinder(
        h=table_leg_height_cm,
        r=table_leg_diameter_cm);
}


// draw crossbars between the legs



```






## Techniques

http://www.crosscuthardwoods.com/

- cutting a round table
- sanding
- staining
- varnishing


- test out the sand and varnish on the sample wood.



