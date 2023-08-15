Object.assign(global, {
    BROWSER : process.env.BROWSER || "chromium",
    BASE_URL : process.env.BASE_URL || "https://trello.com/login",
    ENV : process.env.ENV || "staging",
    CUCUMBER_TIMEOUT : 60000
})