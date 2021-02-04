import * as api from '../../api';

export const getMemories = () => async (dispatch) =>{
    try {
        const { data } = await api.fetchMemory();
        dispatch({ type: 'FETCH_ALL' , payload: data})
        
    } catch (error) {
        console.log(error.message);
    }
}

export const createMemory = (memory) => async (dispatch) => {
    try {
      const {data} = await api.createMemory(memory);
       // console.log(data);
      dispatch({ type: 'CREATE_MEMORY', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const deleteMemory = (id) => async (dispatch) => {
    try {
      await api.deleteMemory(id);
  
      dispatch({ type: 'DELETE_MEMORY', payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateMemory = (id, memory) => async (dispatch) => {
    try {
      const { data } = await api.updateMemory(id, memory);
  
      dispatch({ type: 'UPDATE_MEMORY', payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  

