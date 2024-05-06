export interface Actions{
    type:String
}

export const setPreferences= () => {
    return {
        type:"SET_PREFERENCES"
    }
}

export const clearPreferences= () => {
    return {
        type:"CLEAR_PREFERENCES"
    }
}
export const setFilters= () => {
    return {
        type:"SET_FILTERS"
    }
}

export const clearFilters= () => {
    return {
        type:"CLEAR_FILTERS"
    }
}