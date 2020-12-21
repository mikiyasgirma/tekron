/// TODO: do crud operation on Materials communicate with cloud firestore 

import {db} from '../firebase';


export const createNewRawMaterial = (materialId,newRawMaterial) =>{
    return db.collection('rawMaterials').doc(materialId)
        .set(newRawMaterial);
} 

export const getRawMaterials = () => {
    return db.collection('rawMaterials').get();
}

export const updateRawMaterial = (materialId, newData) =>{
    return db.collection('rawMaterials').doc(materialId)
        .update(newData);
}

export const deleteRawMaterial = (materialId) => {
    return db.collection('rawMaterials').doc(materialId).delete();
}  