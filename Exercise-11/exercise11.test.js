const querySelectorAll = require('./exercise11.js')

test('Check include the div with id="1"', () => {
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

test('Check include the div with id="3"', () => {
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

test('Check include the div with id="5"', () => {
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