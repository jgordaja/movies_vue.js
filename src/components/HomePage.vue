<template> 
    <SearchForm />
    <template v-if="showError">
        <Error :message="messageError" />
    </template>
    <template v-else>
        <template v-if="totalResults > 0">
            <MoviesList />
        </template>
    </template>
</template>

<script> 
import SearchForm from '@/components/SearchForm.vue';
import Error from '@/components/Error.vue';
import MoviesList from './MoviesList.vue';

import { mapGetters } from 'vuex';

export default {
    name: 'HomePage',
    components: {
        SearchForm,
        MoviesList,
        Error, 
    },
    computed: {
        ...mapGetters(['getShowError', 'getMessageError', 'getTotalResults']), 
        showError() {
            return this.getShowError;
        }, 
        messageError() {
            return this.getMessageError;
        },
        totalResults() {
            return this.getTotalResults;
        }, 
    },
}
</script>