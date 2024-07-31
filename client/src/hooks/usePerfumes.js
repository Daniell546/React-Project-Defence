import { useEffect, useState } from "react";
import perfumesAPI from "../api/perfumes-api";

export function useGetAllPerfumes() {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        (async () => {
            const perfumes = await perfumesAPI.getAll();
            setPerfumes(perfumes);
        })();
    }, []);

    return [perfumes, setPerfumes];
}

export function useGetOnePerfume(perfumeId) {
    const [perfume, setPerfume] = useState({});

    useEffect(() => {
        (async () => {
            const result = await perfumesAPI.getOne(perfumeId);
            setPerfume(result);
        })();
    }, [perfumeId]);

    return [perfume, setPerfume];
}

export function useCreatePerfume() {
    const perfumeCreateHandler = async (perfumeData) => {
        await perfumesAPI.createPerfume(perfumeData);
    };

    return perfumeCreateHandler;
}

export function useSearchPerfumes(text, criteria) {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await perfumesAPI.searchByCriteria(text, criteria);
            setPerfumes(result)
        })();
    }, [text, criteria]);

    return [perfumes, setPerfumes];
}
