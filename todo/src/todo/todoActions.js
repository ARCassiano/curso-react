import axios from "axios";

const URL = "https://6329f347713d41bc8e67a74e.mockapi.io/api/todos";

export const changeDescription = (event) => ({
    type: "DESCRIPTION_CHANGED",
    payload: event.target.value
});

export const search = () => {
    return async (dispatch, getState) => {
        const description = getState().todo.description;
        const search = description ? "?description=" + description : "";
        const response = await axios.get(URL + search);
        dispatch({
            type: "TODO_SEARCHED",
            payload: response.data
        })
    };
};

export const add = (description) => {
    const action = async dispatch => {
        await axios.post(URL, { description });
        dispatch(clear());
        dispatch(search());
    }

    return action;
};

export const remove = (todo) => {
    const action = async dispatch => {
        await axios.delete(`${URL}/${todo.id}`);
        dispatch(search());
    }

    return action;
};

export const markAsDone = (todo) => {
    const action = async dispatch => {
        await axios.put(`${URL}/${todo.id}`, { ...todo, done: true });
        dispatch(search());
    }

    return action;
};

export const markAsPending = (todo) => {
    const action = async dispatch => {
        await axios.put(`${URL}/${todo.id}`, { ...todo, done: false });
        dispatch(search());
    }

    return action;
};

export const clear = () => {
    return [
        { type: "TODO_CLEAN" },
        search()
    ];
}