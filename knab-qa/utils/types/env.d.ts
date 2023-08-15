export {}

declare global {
    namespace NodeJS {
        interface ENV {
            BASE_URL : "https://trello.com/login",
        }
    }
}