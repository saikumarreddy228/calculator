var input=document.querySelector("input")

function UserInputValue(u){
    input.value=input.value+u

}
function ClearAllValues(){
    input.value=" "
}
function del(){
    input.value=input.value.slice(0,input.value.length-1)
}
function equal(){
    input.value=eval(input.value)
}