import { createStore } from 'vuex';

const API_KEY = '88150c8c';

export default createStore({
    state: {
        URL: `http://www.omdbapi.com/?apikey=${API_KEY}`,
        showError: false,
        messageError: '',
        movies: [], 
        totalResults: 0, 
        title: '',
        type: '',
        page: 1,
    },
    getters: {
        getUrl(state) {
            return state.URL;
        }, 
        getShowError(state) {
            return state.showError;
        },
        getMessageError(state) {
            return state.messageError;
        },
        getListMovies(state) {
            return state.movies;
        }, 
        getTotalResults(state) {
            return state.totalResults;
        }, 
        getPage(state) {
            return state.page;
        },
        getType(state) {
            return state.type;
        },
        getTitle(state) {
            return state.title;
        },
    },
    mutations: {
        setMessageError(state, message) {
            state.messageError = message ? message : 'Movie not found!';
        },
        setShowError(state, value) {
            state.showError = value;
        },
        saveMovies(state, movies) {
            state.movies = movies;
        }, 
        setTotalResults(state, totalResults) {
            state.totalResults = totalResults;
        }, 
        setPage(state, page) {
            state.page = page;
        },
        setType(state, type) {
            state.type = type;
        },
        setTitle(state, title) {
            state.title = title;
        },
    },
    actions: {
        async loadMovies({commit, state}) {
            commit('setShowError', false); 

            try { 
                let response = await axios.get(`${state.URL}&s=${state.title}&page=${state.page}&type=${state.type}`);

                if (response.data.Response === "True") { 
                    commit('setTotalResults', response.data.totalResults); 
                    commit('saveMovies', response.data.Search); 
                } else { 
                    commit('setShowError', true);
                    commit('setMessageError', response.data.Error);
                }
            } catch (error) { 
                commit('setShowError', true);
                commit('setMessageError', error);
            }
        },
    }
}) 