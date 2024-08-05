import { useEffect, useState } from "react";
import perfumesAPI, { getPerfumesByUser } from "../api/perfumes-api";
import authAPI from "../api/auth.api";

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

    return [perfume];
}

export function useCreatePerfume() {
    const perfumeCreateHandler = async (perfumeData) => {
        await perfumesAPI.createPerfume(perfumeData);
    };

    return perfumeCreateHandler;
}

export function useEditPerfume() {
    const editPerfumeHandler = async (perfumeId, newPerfumeData) => {
        await perfumesAPI.editPerfume(perfumeId, newPerfumeData)
    }

    return editPerfumeHandler;
}

export function useSearchPerfumes(text, criteria) {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await perfumesAPI.searchByCriteria(text, criteria);
            setPerfumes(result);
        })();
    }, [text, criteria]);

    return [perfumes, setPerfumes];
}


export function useGetPerfumesByUser(id) {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getPerfumesByUser(id);
            setPerfumes(result)
        })()
    }, [])
    
    return perfumes
}