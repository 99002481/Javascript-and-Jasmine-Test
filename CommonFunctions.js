const getNumber = function(val){
    if(isNaN(val))
        return 0;
    else 
        return parseFloat(val);
}

const $get = function(id){
    return document.getElementById(id);
}

const getDate = function(dt){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year = dt.getFullYear();
    const month = months[dt.getMonth()];
    const day = dt.getDate();
    return day + " " + month + " " + year;
}