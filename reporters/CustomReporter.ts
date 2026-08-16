import type {
  Reporter,
  TestCase,
  TestResult,
} from '@playwright/test/reporter';

export default class CustomReporter implements Reporter {
  private passed = 0;
  private failed = 0;
  private skipped = 0;

  onTestEnd(test: TestCase, result: TestResult): void {
    if (result.status === 'passed') {
      this.passed++;
    } else if (result.status === 'failed') {
      this.failed++;
    } else if (result.status === 'skipped') {
      this.skipped++;
    }
  }

  onEnd(): void {
    const total =
      this.passed +
      this.failed +
      this.skipped;

    console.log('');
    console.log('====================================');
    console.log('      PLAYWRIGHT TEST SUMMARY');
    console.log('====================================');
    console.log(`Total:    ${total}`);
    console.log(`Passed:   ${this.passed}`);
    console.log(`Failed:   ${this.failed}`);
    console.log(`Skipped:  ${this.skipped}`);
    console.log('====================================');
    console.log('');
  }
}