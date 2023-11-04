import React, { useEffect, useState } from 'react'
import { itemService } from '../services/itemService'
import { Link, useNavigate, useParams } from 'react-router-dom'

export function ItemDetails() {

    const [item, setItem] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadItem()
    }, [params.id])

    async function loadItem() {
        const item = await itemService.getById(params.id)
        setItem(item)
    }

    function onBack() {
        navigate('/')
    }
    
    if (!item) return <div>Loading...</div>
    return (
        <section className='item-details'>
            <section>
                <h3>Model: {item.model}</h3>
            </section>
            <section>
                <h3>Type: {item.type}</h3>
            </section>
            <section>
                <h3>batteryStatus: {item.batteryStatus}</h3>
            </section>
            <img src={`https://robohash.org/${item._id}`} />
            <button onClick={onBack}>Back</button>
        </section>
    )
}
