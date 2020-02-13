'use strict'

const test = require('ava')
const path = require('path')

const extractFrames = require('.')

test(`extract image`, async (t) => {
    const directory = 'media';
    const filename = 'test-%d.png'
    const output = path.join(directory, filename)
    const input = path.join(directory, 'sample.gif')

    const results = await extractFrames({
        input,
        output
    })
    console.log(results);
    t.pass();
});