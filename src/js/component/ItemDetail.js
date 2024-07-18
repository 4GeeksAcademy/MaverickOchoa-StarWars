import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


const itemDetail = () => {
    const { store } = useContext(Context)
    const { nature, id } = useParams
    const [detail, setDetail] = useState(null)

    const findItem = () => {
        for (let endP of store.endpoints) {
            let result = store[endP].find((item) => item._id == id)
            setDetail(result)
        }
    }

    useEffect(() => {
        findItem()
    }, [store.people])

    return (
        <h1>hollaa</h1>
    )
}

export default itemDetail