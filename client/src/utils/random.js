export function getRandomInt(max, min = 1) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

export function randomValue(array, arrStr) {
    const random = getRandomInt(array.length, 0);
    const value = array[random][arrStr];
    const description = array[random].description;
    return {'value':value, 'description':description};
}

export function removeDups(array) {
    let filter = [];
    const newList = array.filter(function(item) {
        const check = filter.includes(item.value);
        if (check == false) {
            filter.push(item.value);
        }
        return check !== true;
        }
    );

    return newList;
}