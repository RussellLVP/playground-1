// Copyright 2015 Las Venturas Playground. All rights reserved.
// Use of this source code is governed by the MIT license, a copy of which can
// be found in the LICENSE file.

let TextDraw = require('components/text_draw/text_draw.js');

describe('TextDraw', it => {
  it('should validate the options dictionary', assert => {
    assert.throws(() => new TextDraw(42));
    assert.throws(() => new TextDraw(true));
    assert.throws(() => new TextDraw('make it big plz'));
    assert.throws(() => new TextDraw([]));

    assert.doesNotThrow(() => new TextDraw({}));
    assert.doesNotThrow(() => new TextDraw());
  });

  it('should verify and set the position', assert => {
    let textDraw = new TextDraw();

    assert.throws(() => textDraw.position = 42);
    assert.throws(() => textDraw.position = [42]);
    assert.throws(() => textDraw.position = [42, 42, 42]);
    assert.throws(() => textDraw.position = ['fish', 'cake']);

    assert.throws(() => new TextDraw({ position: 42 }));
    assert.throws(() => new TextDraw({ position: [42, 42, 42] }));

    textDraw.position = [40, 42];

    assert.deepEqual(textDraw.position, [40, 42]);

    textDraw = new TextDraw({ position: [30, 31] });
    assert.deepEqual(textDraw.position, [30, 31]);
  });

  it('should verify and set the text', assert => {
    let textDraw = new TextDraw();

    assert.throws(() => textDraw.text = null);
    assert.throws(() => textDraw.text = undefined);
    assert.throws(() => textDraw.text = '');
    assert.throws(() => textDraw.text = '     ');

    assert.throws(() => new TextDraw({ text: null }));
    assert.throws(() => new TextDraw({ text: '  ' }));

    textDraw.text = 'Hello!';

    assert.equal(textDraw.text, 'Hello!');

    textDraw = new TextDraw({ text: 'Hallo!' });
    assert.equal(textDraw.text, 'Hallo!');
  });

  it('should verify and set colors', assert => {
    ['color', 'boxColor', 'shadowColor'].forEach(property => {
      let textDraw = new TextDraw();

      assert.throws(() => textDraw[property] = null);
      assert.throws(() => textDraw[property] = 42);
      assert.throws(() => textDraw[property] = 'red');
      assert.throws(() => textDraw[property] = 0xFF0000);
      assert.throws(() => textDraw[property] = [0xFF, 0, 0]);

      assert.throws(() => new TextDraw({ [property]: 42 }));
      assert.throws(() => new TextDraw({ [property]: [255, 0, 0] }));

      textDraw[property] = Color.RED;

      assert.equal(textDraw[property], Color.RED);

      textDraw = new TextDraw({ [property]: Color.GREEN });
      assert.equal(textDraw[property], Color.GREEN);
    });
  });
});