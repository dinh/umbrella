var expect = chai.expect;

// Testing the main file
describe("u(selector, context)", function() {
  it("should be defined", function() {
    expect(u).to.be.not.null;
  });

  it("should be a function", function() {
    expect(typeof u).to.equal("function");
  });
  
  it("can accept no argument", function() {
    expect(typeof u()).to.equal('object');
  });
  
  it("can select by class", function() {
    expect(u('.demo').nodes.length).to.equal(1);
  });
  
  it("can select by tag", function() {
    expect(u('body').nodes.length).to.equal(1);
  });
  
  it("can select by id", function() {
    expect(u('#demo').nodes.length).to.equal(1);
  });

  it("can select with css", function() {
    expect(u('[id="demo"]').nodes.length).to.equal(1);
    expect(u('.demo ul').nodes.length).to.equal(1);
  });
  
  it("can select an object", function() {
    var object = u('.demo li').nodes[0];
    expect(u(object).nodes.length).to.equal(1);
  });
  
  it("can use a context", function() {
    var context = u('.demo li').nodes[0];
    expect(u('a', context).nodes.length).to.equal(1);
  });
});
// Testing the main file
describe(".addClass(name1, name2, ...)", function() {
  
  beforeEach(function(){
    expect(base.hasClass('bla')).to.equal(false);
    expect(base.hasClass('blu')).to.equal(false);
  });
  
  afterEach(function(){
    base.removeClass('bla');
    base.removeClass('blu');
  });
  
  it("should be defined", function() {
    expect(typeof base.addClass).to.equal('function');
  });

  it("can be called empty", function() {
    base.addClass();
    base.addClass("");
    base.addClass([]);
    base.addClass({});
    base.addClass("","");
    base.addClass(" ");
  });

  it("adds a class", function() {
    base.addClass('bla');
    expect(base.hasClass('bla')).to.equal(true);
  });

  it("adds several classes as arguments", function() {
    base.addClass('bla', 'blu');
    expect(base.hasClass('bla')).to.equal(true);
    expect(base.hasClass('blu')).to.equal(true);
  });

  it("adds several classes with an array", function() {
    base.addClass(['bla', 'blu']);
    expect(base.hasClass('bla')).to.equal(true);
    expect(base.hasClass('blu')).to.equal(true);
  });

  it("adds several classes separated by space", function() {
    base.addClass('bla blu');
    expect(base.hasClass('bla')).to.equal(true);
    expect(base.hasClass('blu')).to.equal(true);
  });

  it("adds several classes separated by comma", function() {
    base.addClass('bla,blu');
    expect(base.hasClass('bla')).to.equal(true);
    expect(base.hasClass('blu')).to.equal(true);
  });
});