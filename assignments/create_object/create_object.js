function CreateObject(arr) {
    // Write your code here

    const obje={};
    for(let i=0;i<arr.length-1;i=i+2){
        obje[arr[i]]=arr[i+1];


    }
    return obje;

}

module.exports = CreateObject;
