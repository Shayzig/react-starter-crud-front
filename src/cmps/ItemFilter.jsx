import { memo, useEffect, useState } from "react"
import { useEffectUpdate } from "../customHooks/useEffectUpdate"

export const ItemFilter = memo((props) => {

    const [filterBy, setFilterBy] = useState(props.filterBy)

    useEffectUpdate(() => {
        props.onChangeFilter(filterBy)
    }, [filterBy])

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

        setFilterBy(prevFilterBy => ({
            ...prevFilterBy,
            [field]: value
        }))
    }

    const { model, type, minBatteryStatus, maxBatteryStatus } = filterBy
    return (
        <form className='item-filter'>
            <section>
                <label htmlFor="model">Model</label>
                <input onChange={handleChange} value={model} type="text" name="model" id="model" />
            </section>
            <section>
                <label htmlFor="type">Type</label>
                <input onChange={handleChange} value={type} type="text" name="type" id="type" />
            </section>
            <section>
                <label htmlFor="minBatteryStatus">MinBatteryStatus</label>
                <input onChange={handleChange} value={minBatteryStatus} type="number" name="minBatteryStatus" id="minBatteryStatus" />
            </section>
            <section>
                <label htmlFor="maxBatteryStatus">MaxBatteryStatus</label>
                <input onChange={handleChange} value={maxBatteryStatus} type="number" name="maxBatteryStatus" id="maxBatteryStatus" />
            </section>
        </form>
    )
}
)