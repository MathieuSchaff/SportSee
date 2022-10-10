const getUserById = (id) =>
  USER_MAIN_DATA.filter((user) => user.id === id).shift();

/**
 * @param {number} id
 */
const getUserActivityById = (id) =>
  USER_ACTIVITY.filter((userActivity) => userActivity.userId === id).shift();

/**
 * @param {number} id
 */
const getUserAverageSession = (id) =>
  USER_AVERAGE_SESSIONS.filter(
    (userActivity) => userActivity.userId === id
  ).shift();

/**
 * @param {number} id
 */
const getUserPerformance = (id) =>
  USER_PERFORMANCE.filter(
    (userPerformance) => userPerformance.userId === id
  ).shift();
