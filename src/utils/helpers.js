export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    if (type === 'category'){
        return ['todas', ...new Set(unique)]
    }
    return ['todos', ...new Set(unique)]
}