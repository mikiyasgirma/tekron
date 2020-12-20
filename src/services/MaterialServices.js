/// TODO: do crud operation on Materials communicate with cloud firestore 

import {db} from '../firebase';


export const createNewRawMaterial = (materialId,newRawMaterial) =>{
    return db.collection('rawMaterials').doc(materialId)
        .set(newRawMaterial);
} 

export const getRawMaterials = () => {
    return db.collection('rawMaterials').get();
}