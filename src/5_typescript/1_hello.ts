// TypeScript = JavaScript + Types

// L1: TypeScript is like JavaScript with minor changes.
// These changes relate to types.
// console.log('Hello TypeScript')

// L2: TypeScript adds interfaces

// Can define an interface from primitive types
// Interface -> Describes what kind of fields/methods the object has
// If we don't know if the field will be there, we can add a question mark
console.log("I am compiled 223!!!")

interface User {
    name: string;
    age: number;
    picture_url?: string; // optional field
}

// can declare variable as being of a certain type
const user: User = {
    name: 'John',
    age: 30
}

// can declare arrays as being of a certain type
// two ways to do it -> they are both the same in the end
const usersArr: Array<User> = [];
const users: User[] = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Jane',
        age: 25
    }
]

console.log(users);

const userMap: Map<number, User> = new Map<number, User>()
userMap.set(1, { name: 'John', age: 30 });
console.log(userMap.get(1));

// Can create new types from existing ones
// This is useful to deal with cases when some crap might be returned
const u : User[] | undefined = [];
const u1 : User[] | null = null;

// This is basically the CORE of it. We can now specify types as function input parameters
function f(u:User) {
    console.log("hello from f:",u.name);
}

f({name: 'John', age: 30});
// f("abc"); --> this will break



// Interfaces can also contain objects
interface Image {
    url: string;
    size: {width: number, height: number};
}

// Can create generics types
interface Backpack<T> {
    id: string;
    product: T;
}





