let num: number = 1;
let str: string = 'abc';
let bool: boolean = false;

let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

let tuple: [string, number] = ['abc', 1];

// any\unknown

// null\undefined

// void\never

function fun(num: number): number {
    return num * 2;
}

function fun2(num: number): void {
    console.log(num)
}


// readonly
interface Props {
    readonly name: string;
    [key: string]: any;
}

const obj: Props = {
    name: 'kaifang',
    age: 36
}

obj.name = 1;

function reverse<T>(items: T[]): T[] {
    return items.reverse();
}

reverse<number>([1, 2, 3, 4])
reverse<string>(['a', 'b', 'c', 'd'])

