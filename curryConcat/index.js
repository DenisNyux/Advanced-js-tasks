const concatStrings = (str, separator='') => {
    if (typeof separator !== 'string'){
        separator = ''
    }
    const resultString = []
    const innerConcatStrings = (str) => {
        if (typeof str !== 'string') {
            return resultString.join(separator)
        } else {
            resultString.push(str);
            return innerConcatStrings
        }
    }
    return innerConcatStrings(str)
}
