class Animals{
    sound(){
        console.log("animals make different sound");
    }
}
class dog{
    sound(){
        console.log("dog barkers");
    }
}
class cat{
    sound(){
        console.log("cat mews");
    }
}

let puppy= new dog()
let plener= new cat()
Animals=new Animals()
puppy.sound()
plener.sound()
Animals.sound()
