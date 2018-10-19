describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree(1);
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('_value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree._children[0]._value).to.equal(5);
    expect(tree._children[0]._parent._value).to.equal(1);
  });

  it('should return the number of children', function() {
    expect(tree.addChild(9)).to.equal(1);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree._children[0].addChild(6);
    expect(tree._children[0]._children[0]._value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree._children[0].addChild(7);
    tree._children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should disassociate child from parent in both directions', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree._children[0].addChild(7);
    tree._children[0].addChild(8);
    var six = tree._children[1];
    tree.removeFromParent(6);
    expect(tree._children.length).to.equal(1);
    expect(six._parent).to.equal(null);
    var eight = tree._children[0]._children[1];
    tree.removeFromParent(8);
    expect(tree._children[0]._children.length).to.equal(1);
    expect(eight._parent).to.equal(null);
  });

  it('should accept a callback and execute it on every value', function() {
    var cb = function(x) { return x + 1; };
    tree.addChild(5);
    tree.addChild(8);
    tree.traverse(cb);
    expect(tree.contains(6)).to.equal(true);
    expect(tree.contains(9)).to.equal(true);
  });

});
