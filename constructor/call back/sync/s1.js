let Employees = [
    {
        id: 101, name: "srinu", age: 22
    },
    {
        id: 102, name: "vasu", age: 23
    },
]
let createmployess = () => {
    setTimeout(() => {
        console.log("hoo");
    }, [4000])
}
let insertemployess = () => {
    setTimeout(() => {
        console.log("creat new");
    }, [2000])
    

}


createmployess();
insertemployess();
