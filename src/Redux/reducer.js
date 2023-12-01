import { ALLEPISODES, ALLPROJECT, EPISODES, PROJECT, USERPROFILE } from "./actionType"

const initial = {
    userProfile: JSON.parse(localStorage.getItem("zuraventure")) || '',
    projects: [],
    episodes: []
}

export const reducer = (state = initial, { type, payload }) => {
    switch (type) {
        case USERPROFILE:
            return { ...state, userProfile: payload }
        case PROJECT:
            return { ...state, projects: [payload, ...state.projects] }
        case ALLPROJECT:
            return {...state,projects:payload}
        case EPISODES:
            return { ...state, episodes: [payload, ...state.episodes] }
        case ALLEPISODES:
            return {...state, episodes:payload}
        default:
            return { ...state }
    }
}