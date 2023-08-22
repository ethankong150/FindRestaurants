function TopReformat(data) {
    res = []
    for(item of data){
        res.push(
        {
            "name": item.name,
            "avgScore": item.averageScore
            
        })
    }
    return res
}

module.exports = TopReformat;

// ex:[
// 	"name": "Bella Napoli", "avgScore": 38.6},
// 	"name": "Tenda Asian Fusion", "avgScore": 37.4},
// 	"name": "Red Chopstick", "avgScore": 36.29},
// 	"name": "El Mixteco", "avgScore": 34.8},
// 	"name": "Bamboo Restaurant", "avgScore": 34.0}
// ]