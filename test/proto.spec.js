

var capability1 =function(){
  return "capability1";
}

var capability2 =function(){
  return "capability2";
}



var function1 = {
  p1: "p1",
  capability1
}

var function2 = {
  p2: "p2",
  capability2
}

var composer = (obj,func) => Object.assign(obj,func);

var prototyper = (proto) => Object.create(proto);

var assert = require('assert');
describe('Composition', function() {
  describe('composer', function() {
    it('should ', function() {
      var o = {}
      var c1 = composer(o,function1)
      assert.equal(c1.capability1(),"capability1");
      var c2 = composer(c1,function2)
      assert.equal(c2.capability1(),"capability1");
      assert.equal(c2.capability2(),"capability2");

      capability1 = function() { return "newcapability1"}

      assert.equal(o.capability1(),"capability1");
      assert.equal(o.capability2(),"capability2");
    });
  });
  describe('prototyping', function() {
    it('should ', function() {
      var o = prototyper({});
      o = composer(o,function1)
      assert.equal("capability1",o.capability1())

      var o2 = prototyper(o);
      o2 = composer(o2,function2)    

      assert.equal("capability1",o2.capability1())
      assert.equal("capability2",o2.capability2())
    });
  });
});
