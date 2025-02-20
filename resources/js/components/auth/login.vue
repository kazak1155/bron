<template>
    <div>
       <h2>Login page</h2>
        <div class="w-25">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input v-model="user.email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group mt-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="user.password" type="password" class="form-control" id="password" placeholder="enter password">
                </div>
                <button @click.prevent="$store.dispatch('user/login', {email: user.email, password: user.password})" type="submit" class="mt-3 btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {

    computed: {
        ...mapGetters({
            user: 'user/user',
        }),
    },

};
</script>

<style scoped>

</style>
