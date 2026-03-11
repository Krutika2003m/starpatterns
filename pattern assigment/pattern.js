function printSquare() {
    for ( i = 1; i <= 5; i++) {
         row = ""
        for ( j = 1; j <= 5; j++) {
            row += "* "
        }
        console.log(row);
    }
}
printSquare()

console.log("---------------------------------")

function printTriangle(n){
    for(let i=1;i<=n;i++){
        let row=""
        for(let j=1;j<=i;j++){
            row += "* "
        }
        console.log(row)
    }
}

printTriangle(5)

console.log("---------------------------------")

function printinvertedtriangle(n){}
for( i = 5; i >= 1; i--) {
     pattern = ""
    for( j = 1; j <= i; j++) {
        pattern += "* "
    }
    console.log(pattern)
}

printinvertedtriangle()


console.log("----------------------------------")

function printpyramid(n){
    for(let i=1;i<=n;i++){
        let row="";
        
        for(let s=1;s<=n-i;s++){
            row += " ";
        }

        for(let j=1;j<=i;j++){
            row += "* ";
        }

        console.log(row);
    }
}

printpyramid(5);

console.log("----------------------------------")
function printDiamond(n) {

    // Upper part
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let s = 1; s <= n - i; s++) {
            row += " ";
        }

        for (let j = 1; j <= (2 * i - 1); j++) {
            row += "*";
        }

        console.log(row);
    }

    // Lower part
    for (let i = n - 1; i >= 1; i--) {
        let row = "";

        for (let s = 1; s <= n - i; s++) {
            row += " ";
        }

        for (let j = 1; j <= (2 * i - 1); j++) {
            row += "*";
        }

        console.log(row);
    }
}

printDiamond(4);

function printPyramid(n){
    for(let i = 1; i <= n; i++){
        let row = "";
        
        for(let s = 1; s <= n - i; s++){
            row += " ";
        }

        for(let j = 1; j <= i; j++){
            row += i + " ";
        }

        console.log(row);
    }
}

printPyramid(5);

console.log("----------------------------------")

function hollowSquare(n){
    for(let i = 1; i <= n; i++){
        let row = "";

        for(let j = 1; j <= n; j++){
            if(i == 1 || i == n || j == 1 || j == n){
                row += "* ";
            } else {
                row += "  ";
            }
        }

        console.log(row);
    }
}

hollowSquare(5);

console.log("-------------------------")

function zigzagPattern(n){
    for(let i = 1; i <=4 ; i++){
        let row = "";
        
        for(let j = 1; j <= n; j++){
            if((i == 1 && j % 5 == 4) || 
               (i == 2 && (j % 4 == 2 || j % 4 == 0)) || 
               (i == 3 && j % 4 == 1)){
                row += "* ";
            } else {
                row += "  ";
            }
        }
        
        console.log(row);
    }
}

zigzagPattern(12);