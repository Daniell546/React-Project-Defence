import { useState, useCallback } from "react";

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);
    
    const changeHandler = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        submitCallback(values);
    };

    const resetForm = useCallback((newValues) => {
        setValues(newValues);
    }, []);   

    return {
        values,
        changeHandler,
        submitHandler,
        resetForm,
        setValues
    };
}
