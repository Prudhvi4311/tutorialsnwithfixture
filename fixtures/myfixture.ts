import {test as basetest} from "@playwright/test"

type fix = {

}

const mytest = basetest.extend<fix>({})

export const test = mytest;
export const expect = mytest.expect;
export const describe = mytest.describe;
