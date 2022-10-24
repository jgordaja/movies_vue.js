<template> 
    <h2 class="text-danger text-center m-3">
        {{ messageError }}
    </h2>
</template>

<script>
export default {
    name: 'Error', 
    props: {
        message: {
            type: String,
            default: '',
            required: true
        }
    },
    computed: {
        messageError() {
            return this.message;
        },
    },
}
</script>