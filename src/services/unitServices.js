 

import {db} from '../firebase';


export const createNewUnit = (unitId,newUnit) =>{
    return db.collection('units').doc(unitId)
        .set(newUnit);
} 

export const getUnits = () => {
    return db.collection('units').get();
}

export const updateUnit = (unitId, newData) =>{
    return db.collection('units').doc(unitId)
        .update(newData);
}

export const deleteUnit = (unitId) => {
    return db.collection('units').doc(unitId).delete();
}  