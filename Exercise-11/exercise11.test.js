const querySelectorAll = require('./exercise11.js')

test('Must select nodes whose children match a pattern. For the input "div.note < input.is-complete[checked], the parent must include the div with id="1"', () => {
  document.body.innerHTML = `
    <section>
        <div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>
        <div id="2" class="note"></div>
        <div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
        <div id="4" class="note"></div>
      <div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>
    </section>
  `;
  require('./exercise11.js');
  const elements = querySelectorAll("div.note < input.is-complete[checked]");
  const div1 = document.getElementById('1');
  expect(elements[0]).toBe(div1);
});

test('Must select nodes whose children match a pattern. For the input "div.note < input.is-complete[checked], the parent must include the div with id="3"', () => {
  document.body.innerHTML = `
    <section>
        <div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>
        <div id="2" class="note"></div>
        <div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
        <div id="4" class="note"></div>
      <div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>
    </section>
  `;
  require('./exercise11.js');
  const elements = querySelectorAll("div.note < input.is-complete[checked]");
  const div3 = document.getElementById('3');
  expect(elements[1]).toBe(div3);
});

test('Must select nodes whose children match a pattern. For the input "div.note < input.is-complete[checked], the parent must include the div with id="5"', () => {
  document.body.innerHTML = `
    <section>
        <div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>
        <div id="2" class="note"></div>
        <div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
        <div id="4" class="note"></div>
      <div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>
    </section>
  `;
  require('./exercise11.js');
  const elements = querySelectorAll("div.note < input.is-complete[checked]");
  const div5 = document.getElementById('5');
  expect(elements[2]).toBe(div5);
});

test('Must select nodes whose children match a pattern. For the input "div.note < input.is-complete[checked], the parent must include the div with id="5"', () => {
  document.body.innerHTML = `
    <div id="5" class="note">
        <span>
            <input id="me" type="checkbox" checked>
        </span>
    </div>
  `;
  require('./exercise11.js');
  const elements = querySelectorAll("div < span");
  const div = document.getElementById('5');
  expect(elements[0]).toBe(div);
});

test('Must select nodes whose children match a pattern. For the input "div.note < input.is-complete[checked], ¡there is no parent defined (undefined)', () => {
  document.body.innerHTML = `
    <div id="5" class="note">
        <span>
            <input id="me" type="checkbox" checked>
        </span>
    </div>
  `;
  require('./exercise11.js');
  const elements = querySelectorAll("div < span > input");
  const div5 = document.getElementById('5');
  expect(elements[2]).toBe(undefined);
});
