const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-reports",
    reportPath: "test-reports/html-report",
    reportName: "Knab Automation Suite Report",
    pageTitle: "Trello Create Board Test Suite",
    displayDuration: true,
    hideMetadata : true,
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Trello Board Creation" },
        ],
    },
});