export const setEditing = () => {
    return { type: 'TOGGLE_EDITING' };
}

export const updateFeature = newFeatureText => {
    return { type: 'UPDATE_FEATURES', payload: newFeatureText };
}
