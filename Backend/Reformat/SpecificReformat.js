function SpecificReforamt(data) {
    res = {
        "names": [],
        "boroughs": [],
        "cuisines": []
    }
    for(item of data){
        res.names.push(item.name)
        res.boroughs.push(item.borough)
        res.cuisines.push(item.cuisine)
    }
    return res
}

module.exports = SpecificReforamt;

//ex:{
// 	"names": ["Brian's Burgers", "Frank's Franks", ...],
// 	"boroughs": ["Bronx", "Bronx", ...],
// 	"cuisines": ["American", "American", ...]
// }