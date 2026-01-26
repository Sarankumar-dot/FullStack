// es modules are used to import and export functionalities between different js files
// this helps to keep the code organized and maintainable
// to export a functionality from a file we use the export keyword

export function add(...args){ // if we want to use this function in another file we can use es modules
    return args.reduce((acc,value) =>{ // export keyword making the file available for export
        return acc += value;
    },0)
}

//console.log(add(1,2,3));