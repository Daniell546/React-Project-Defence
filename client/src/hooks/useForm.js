import { useState, useCallback, useEffect } from "react";

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);
    useEffect(() => {
        setValues(initialValues)
    }, [initialValues])

    const changeHandler = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        submitCallback(values);
        // setValues(initialValues);
    };

    const resetForm = useCallback((newValues) => {
        setValues(newValues);
    }, []);

    return {
        values,
        changeHandler,
        submitHandler,
        resetForm,
        setValues,
    };
}
