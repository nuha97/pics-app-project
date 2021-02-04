 const memoryReducer = (memories = [] , action ) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE_MEMORY':
            return [...memories,action.payload];
        case 'UPDATE_MEMORY':
                return memories.map((memory) => (memory._id === action.payload._id ? action.payload : memory));
        case 'DELETE_MEMORY':
                return memories.filter((memory) => memory._id !== action.payload);
        default:
            return memories;
    }
}

export default memoryReducer