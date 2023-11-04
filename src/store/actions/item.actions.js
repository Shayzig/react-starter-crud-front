import { itemService } from "../../services/itemService";
import { REMOVE_ITEM, SET_FILTER_BY, SET_ITEMS } from "../reducers/item.reducer";
import { store } from "../store";


export async function loadItems() {
    try {
        const filterBy = store.getState().itemModule.filterBy
        const items = await itemService.query(filterBy)
        const action = {
            type: SET_ITEMS,
            items
        }
        store.dispatch(action)
    } catch (error) {
        console.log('error:', error)
    }

}

export async function removeItem(itemId) {
    try {
        await itemService.remove(itemId)
        const action = {
            type: REMOVE_ITEM,
            itemId
        }
        store.dispatch(action)
    } catch (error) {
        console.log('error:', error)
    }

}

export async function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTER_BY, filterBy })
}
