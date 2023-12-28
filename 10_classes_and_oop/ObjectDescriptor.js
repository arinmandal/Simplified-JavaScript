// ObejctDescriptor
const obj = {
  name: 'John',
  age: 30
};

const propertyDescriptor = Object.getOwnPropertyDescriptor(obj, 'name');
Object.defineProperty(obj, 'name', {
  writable: false
});

console.log(obj.name);
obj.name = "Arin";
console.log(obj.name)

