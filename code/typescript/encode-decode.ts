let value = "hello"; // Initial
console.log(value);

value = btoa(value);
console.log(value);

value = encodeURIComponent(value);
console.log(value);

value = decodeURIComponent(value);
console.log(value);

value = atob(value);
console.log(value); // Final