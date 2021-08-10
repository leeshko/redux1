export function createStore(rootResucer, initialState) {
    let state = rootResucer(initialState, {type: '__INIT__'});
    const subscribers =[];
    return {
        // action === {type: 'INCREMENT'}
        dispatch(action) {
            state = rootResucer(state, action); 
            subscribers.forEach(sub => sub())
        }, 
        subscribe(callback) {
            subscribers.push(callback)
        }, 
        getState() {
            return state;
        }
    }
}