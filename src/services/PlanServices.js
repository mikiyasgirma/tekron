
import {db} from '../firebase';


export const createNewPlan = (planId,newPlan) =>{
    return db.collection('plans').doc(planId)
        .set(newPlan);
} 

export const getPlans = () => {
    return db.collection('plans').get();
}

export const updatePlan = (planId, newData) =>{
    return db.collection('plans').doc(planId)
        .update(newData);
}

export const deletePlan = (planId) => {
    return db.collection('plans').doc(planId).delete();
}  