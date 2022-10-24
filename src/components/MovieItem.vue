<template>
    <template v-if="showError">
        <Error :message="messageError" />
    </template>
    <template v-else >
        <div class="my_card">
        <div class="card_wrapper">
            <div class="card__img_info img_info">
                <div class="img_info__img">
                    <img class="img" :src="findMovie.Poster || ''" :alt="findMovie.Title || ''">
                </div>
                <div class="h6">
                    Actors: {{ findMovie.Actors || '' }}
                </div>
            </div>
            <div class="card__text_info"> 
                <h2 class="card_title">
                    {{ findMovie.Title || '' }}
                </h2>
                <p class="card__release_date">
                    {{ findMovie.Year || '' }} year
                </p>
                <p class="card__release_date">
                    {{ findMovie.Genre || '' }}
                </p>
                <p class="card__release_date">
                    {{ findMovie.Languages || '' }}
                </p>
                <p class="card__description">
                    {{ findMovie.Plot || '' }}
                </p>
                <div class="card__to_buy">
                    <div class="card__amount amount">
                        <span class="amount__discount">Time</span>
                        <span class="amount__price">
                            {{ findMovie.Runtime || '' }}
                        </span>
                    </div>
                    <button class="button__to_buy" @click="showMessage">
                        watch now
                    </button>
                </div> 
            </div>
            <div class="score">
                <span v-if="findMovie.imdbRating !== 'N/A'" class="count percent">
                    {{ findMovie.imdbRating || '' }}
                </span>
            </div>
        </div>
    </div> 
    </template> 
    <button class="btn btn-info w-25 d-flex mx-auto justify-content-center mt-5" @click="back">
        Back
    </button> 
</template>

<script>
import Error from '@/components/Error.vue';

import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'MovieItem',
    components: { 
        Error, 
    },
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            findMovie: {},
        }
    },
    computed: {
        ...mapGetters(['getShowError', 'getMessageError', 'getUrl']), 
        showError() {
            return this.getShowError;
        }, 
        messageError() {
            return this.getMessageError;
        },
        url() {
            return this.getUrl;
        }
    },
    mounted() {
        this.getFilmById();
    },
    methods: {
        ...mapMutations(['setMessageError', 'setShowError']),
        getFilmById() {
            this.setShowError(false); 

            axios.get(`${this.url}&i=${this.id}`)
                .then(response => { 
                    if (response.data.Response === "True") { 
                        this.findMovie = response.data; 
                    } else {
                        this.setMessageError(response.Error); 
                        this.setShowError(true); 
                    }
                })
                .catch(error => { 
                    this.setMessageError(error); 
                    this.setShowError(true); 
                });
        },
        showMessage() {
            alert('Ні, ну то вже занадто, тобі не здається?!))');
        },
        back() {
            this.setMessageError(''); 
            this.setShowError(false); 
            this.$router.back();
        }
    }
} 
</script>