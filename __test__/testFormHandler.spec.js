//Credit, for helping me understand the Jest framework to https://www.testim.io/blog/jest-testing-a-helpful-introductory-tutorial/
import { handleSubmit } from '../src/client/js/app';
import { sumHolCountdown } from '../src/client/js/app';
import { sumHolDuration } from '../src/client/js/app';
describe("Testing handleSubmit", () => {
    test("Test handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    });
});