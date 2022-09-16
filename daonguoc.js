let bin = [-3,5,1,3,2,10]
let first=0;
let last = bin.length - 1;
while (first < last) {
    let b = bin[first];
    bin[first] = bin[last];
    bin[last] = b;
    first++;
    last--;
}
document.write(bin);