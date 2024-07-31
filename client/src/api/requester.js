async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (method !== "GET") {
        options.method = method;
    }

    if (data) {
        options.headers = {
            "Content-Type": "application/json",
        };

        options.body = JSON.stringify(data);
    }

    const user = localStorage.getItem('user');

    if (user) {
        const token = JSON.parse(user).token
        options.headers["Authorization"] = `Bearer ${token}`;
    }

    if (method === "POST" && url === "http://localhost:3000/api/user/login") {
        options.credentials = "include";
    }

    const response = await fetch(url, options);
    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");

export default {
    get,
    post,
    put,
    del,
};
