import React, { useEffect, useState } from 'react'
import { itemService } from '../services/itemService'
import { useNavigate, useParams } from 'react-router-dom'

export function ItemEdit() {

    const [item, setItem] = useState(itemService.getEmptyItem())
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadItem()
    }, [])

    async function loadItem() {
        const itemId = params.id
        try {
            if (itemId) {
                const item = await itemService.getById(itemId)
                setItem(item)
            }
        } catch (error) {
            console.log('error:', error)
        }
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = (+value || '')
                break;
            case 'checkbox':
                value = target.checked
            default:
                break;
        }

        setItem(prevItem => ({
            ...prevItem,
            [field]: value
        }))
    }

    async function onSaveItem(ev) {
        ev.preventDefault()
        try {
            await itemService.save(item)
            navigate('/')
        } catch (error) {
        }
    }

    const { model, type } = item
    
    return (
        <section className='item-edit'>
            <h1>{item._id ? 'Edit' : 'Add'} Item</h1>
            <form onSubmit={onSaveItem} >
                <label htmlFor="model">Model</label>
                <input onChange={handleChange} value={model} type="text" name="model" id="model" />

                <label htmlFor="type">Type</label>
                <select onChange={handleChange} value={type} name="type" id="type">
                    <option disabled value="">Choose a type</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Pleasure">Pleasure</option>
                    <option value="Office">Office</option>
                </select>

                <button>Save</button>
            </form>
        </section>
    )
}
