let spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let maxCount = 9;

for (let count = 0; count < maxCount; count++) {
  setTimeout(() => {
    const counter = count < 4? count: count % 4; 
    process.stdout.write(spin[counter]);
    // console.log(count);
    // console.log(counter);
    // console.log(spin[counter]);
    // console.log("=====");
  }, 100+ count * 200);
}
setTimeout(()=>{
  process.stdout.write("\n");
}, 100+ maxCount * 200);




