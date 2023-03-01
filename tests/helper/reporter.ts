import allure from "@wdio/allure-reporter";

/**
 * Global reporter used for both logger and Allure.
 * Currently added message goes as a arg to .addstep() of alllure, add more param as required
 * Allure can ignore certain steps such as retry steps
 * @param testid : this.testid or NA. This is a mandatory field
 * @param loglevel
 * @param msg
 */
function addStep(
    testid: string,
    loglevel: string,
    msg: string,
) {
    let arr = ["info", "error"];
    if (!testid) throw Error(`Invalid testid: ${testid} field to report step`);
    if (!msg) throw Error(`Given message: ${msg} is not valid to report`);
    if (!arr.includes(loglevel)) throw Error(`Given loglevel: ${loglevel} is invalid and should be one of these values: ${arr}`);
    try {
        if (loglevel === "info") {
            allure.addStep(msg, {}, "passed");
        }
        if (loglevel === "error") {
            allure.addStep(msg, {}, "failed"); // Substep to fail if error
        }
    } catch (err) {
        throw Error(`Error reporting reporter step, ${err}`);
    }
}
export default { addStep };