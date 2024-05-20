export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    if (type === 'category'){
        return ['Todas', ...new Set(unique)]
    }
    return ['Todos', ...new Set(unique)]
}