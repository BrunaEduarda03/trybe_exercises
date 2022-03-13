function techList(array,name) 
{
    if (array.length === 0)
        return 'Vazio!';
    const sortedArray = array.sort();
    const list = [];
    for (let i = 0; i < sortedArray.length; i+=1) {
        list.push({
            tech:sortedArray[i],
            name,
        });
        
    }
return list;

};

module.exports = techList;