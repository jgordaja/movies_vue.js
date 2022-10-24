<template>
    <h1 class="text-success text-center m-3">
        Search Movies
    </h1> 
    <div class="input-group mb-2 mt-5">
        <input 
            type="text" 
            class="form-control searchText" 
            placeholder="Enter the name of the movie" 
            v-model="search"
            @keyup.enter="searchMovies">
        <button class="btn btn-outline-primary" type="button" id="btn_search" @click="searchMovies">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </button>
    </div>
    <div class="mb-5">
        <input type="radio" class="btn-check" autocomplete="off" checked
            name="type"
            id="movie" 
            value="movie" 
            v-model="typesOfMovies">
        <label class="btn btn-outline-primary" for="movie">Movie</label>

        <input type="radio" class="btn-check" autocomplete="off"
            name="type"
            id="series" 
            value="series" 
            v-model="typesOfMovies"> 
        <label class="btn btn-outline-primary" for="series">Series</label>

        <input type="radio" class="btn-check" autocomplete="off"
            name="type"
            id="episode" 
            value="episode" 
            v-model="typesOfMovies"> 
        <label class="btn btn-outline-primary" for="episode">Episode</label>
    </div> 
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: 'SearchForm',
    data() {
        return {
            search: 'garfield', 
            typesOfMovies: 'movie', 
        }
    },
    computed: {
        ...mapGetters(['getUrl', 'getListMovies']),
        URL() {
            return this.getUrl;
        }, 
        listMovies() {
            return this.getListMovies;
        },
    }, 
    methods: { 
        ...mapMutations(['setType', 'setTitle']),
        ...mapActions(['loadMovies']),
        searchMovies() { 
            this.setTitle(this.search);
            this.setType(this.typesOfMovies);

            this.loadMovies();
        }
    },
}
</script>