// Internationalization API

const now = new Date();
console.log(now);

const options = {
    hours: "numeric",
    minutes: "numeric",
    day: "numeric",
    month: "numeric",
    weekday: "long",
    year : "numeric"
}

const intDate = new Intl.DateTimeFormat('en-IN',options).format(now)
console.log(intDate)