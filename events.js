module.exports = {
    "followed": { following: true, user: { username: "Test User", id:123 }},
    "subscribed": { user: { username: "Test User", id:123 } },
    "resubscribed": { totalMonths: 3, user: { username: "Test User", id:123 }, until: "2017-12-25 11:00:00", since: "2017-09-25 11:00:00" },
    "resubShared": { totalMonths: 3, user: { username: "Test User", id:123 }, until: "2017-12-25 11:00:00", since: "2017-09-25 11:00:00" },
}
