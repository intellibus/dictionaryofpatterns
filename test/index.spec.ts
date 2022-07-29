import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Dictionary Of Patterns Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'dictionaryofpatterns');
});

export const { run } = test;
