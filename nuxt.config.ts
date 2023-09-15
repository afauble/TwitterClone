// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],

    build: {
        transpile: ['@heroicons/vue']
    },

    runtimeConfig: {
        jwtAccessSecret: process.env.JWT_ACCESSTOKEN,
        jwtRefreshSecret: process.env.JWT_REFRESHTOKEN
    }
})
