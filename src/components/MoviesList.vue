<template>
    <ul class="list-group m-5" id="list">
        <li v-for="item in listMovies" :key="item.imdbID"
            class="list-group-item d-flex justify-content-between">
            <h2 class="h5">
                {{ item.Title }} ({{ item.Year }}) 
            </h2>
            <router-link :to="{ name: 'movie', params: { id: `${item.imdbID}` }}" class="btn btn-info"> 
                Details 
            </router-link> 
        </li>
    </ul>
    <div class="paginator">
        <Pagination v-model="page" :records="+totalResults" :per-page="10" @paginate="searchMovies"/>
    </div> 
</template>

<script>
import Pagination from 'v-pagination-3';

import { mapGetters, mapMutations, mapActions } from 'vuex';

export default { 
    name: 'MoviesList',
    components: {
        Pagination,
    },
    data() {
        return {
            page: 1, 
        }
    },
    computed: {
        ...mapGetters(['getListMovies', 'getTotalResults']), 
        listMovies() {
            return this.getListMovies;
        },
        totalResults() {
            return this.getTotalResults;
        }
    },
    methods: { 
        ...mapMutations(['setPage']),
        ...mapActions(['loadMovies']),
        searchMovies() { 
            this.setPage(this.page); 
            this.loadMovies();
        }
    },
}
</script>