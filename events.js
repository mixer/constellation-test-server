module.exports = {
  followed: { following: true, user: { username: "Test User", id: 123 } },
  subscribed: { user: { username: "Test User", id: 123 } },
  resubscribed: {
    totalMonths: 3,
    user: { username: "Test User", id: 123 },
    until: "2017-12-25T11:00:00.000Z",
    since: "2017-09-25T11:00:00.000Z"
  },
  resubShared: {
    totalMonths: 3,
    user: { username: "Test User", id: 123 },
    until: "2017-12-25T11:00:00.000Z",
    since: "2017-09-25T11:00:00.000Z"
  },
  hosted: { hoster: { id: 123, token: "Test User" }, hosterId: 123 },
  unhosted: { hoster: { id: 123, token: "Test User" }, hosterId: 123 }
};
