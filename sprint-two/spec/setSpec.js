describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    set.add(1);
    set.add({a: 2, b: 1});
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains({a: 2, b: 1})).to.equal(true);
  });

  it('should return the size of the set', function() {
    expect(set.add('Justin Bieber')).to.equal(1);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.add(1);
    set.remove('Mel Gibson');
    set.remove(1);
    set.add({a: 2, b: 1});
    set.remove({a: 2, b: 1});
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(set.contains(1)).to.equal(false);
    expect(set.contains({a: 2, b: 1})).to.equal(false);
  });

});
