const releaseNotes = require('../release-notes');
const fs = require('fs');
const through = require('through2');
const exhaustively = require('stream-exhaust');

describe('Release Notes', () => {
  it('dummy', done => {
    done();
  });
  // it('generates notes for internal builds', (done) => {
  //   let data = ''
  //   const reader = exhaustively(through((chunk, enc, done) => done(null, data+=chunk)))
  //   releaseNotes({ isInternal: true })
  //   .pipe(reader)
  //   .on('end', () => {
  //     expect(data).toContain('Bug Fixes')
  //     expect(data).toContain('design-system-internal')
  //     expect(data.length).toBeGreaterThan(100)
  //     done()
  //   })
  // })
  //
  // it('generates notes for external builds', (done) => {
  //   let data = ''
  //   const reader = exhaustively(through((chunk, enc, d) => d(null, data+=chunk)))
  //   releaseNotes({ isInternal: false })
  //   .pipe(reader)
  //   .on('end', () => {
  //     expect(data).toContain('Bug Fixes')
  //     expect(data).not.toContain('design-system-internal')
  //     expect(data.length).toBeGreaterThan(100)
  //     done()
  //   })
  // })
});
